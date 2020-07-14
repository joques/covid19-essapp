/**
 * Authorization Handler
 * @module lib/authorization
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright (c) 2017 Jonas Tomanga
 * @license MIT
 */

require('../config/crud');
const _ = require('lodash');
const Logger = require('./logger');
const config = require('../app.config');
const $session = require('../config/session');

/**
 * Authorization class
 * @property {Object} config - path configuration settings.
 */
class Authorization {
    /**
     * Authorization constructor
     * @param {Object} config - configuration for this path.
     */
    constructor(config) {
        /** @type {Object} */
        this.config = config;
        this.authorizer = this.authorizer.bind(this);
        this.authorizeRole = this.authorizeRole.bind(this);
        this.authorizeType = this.authorizeType.bind(this);
        this.compoundResolver = this.compoundResolver.bind(this);
        this.configBasedAuthorization = this.configBasedAuthorization.bind(this);
        this.permissionsBasedAuthorization = this.permissionsBasedAuthorization.bind(this);
    }
    /**
     * Authorization middleware
     * @param {object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {object} next - Express next function.
     */
    authorizer(req, res, next) {
        Logger.info('authorizing');
        let action = $CRUD[req.method] || null;
        if (req.jwt.payload.iss === config.iss) {
            this.authorize(req, res, action).then(data => {
                Logger.info('Authorized'); /** @todo Remove */
                next();
            }).catch(error => {
                Logger.warn('User is not authorized');
                next(error);
            });
        } else {
            next(new res.$errors.UnauthorizedError(res.$codes.wrongToken));
        }
    };

    /**
     * Core function that checks if a user is authorized to perform a particular action on a particular resource.
     * The user must have an active session with permissions defining what the user has access to
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {string} action - The action to be performed.
     * @returns {Promise} 
     */
    authorize(req, res, action) {
        const permissions = req.$session.getPermissions();
        const permID = this.config.authorization.permissionID;
        return (permissions && _.has(permissions, permID)) ?
            this.permissionsBasedAuthorization(permissions[permID], req, res, action) : this.configBasedAuthorization(req, res, action);
    }

    /**
     * Authorization based on permissions defined for the user.
     * @param {number} permission - User's permission for this path.
     * @param {Object} req - Express request object.
     * @param {object} res - Express response object.
     * @param {string} action - HTTP method.
     * @returns {Promise.<true|Error>}
     */
    permissionsBasedAuthorization(permission, req, res, action) {
        Logger.info('Authorizing based on permissions...'); /** @todo Remove */
        // bitwise check the permissions for the authenticated user
        if ((permission & req.$access.permissions[action]) === req.$access.permissions[action]) {
            return Promise.resolve(true);
        } else if (((permission >> 5) & req.$access.permissions[action]) === req.$access.permissions[action]) {
            req.$owner = true;
            return Promise.resolve(true);
        } else {
            return Promise.reject(new res.$errors.UnauthorizedError(res.$codes.notAuthorized));;
        }

    }
    /**
     * Authorization based on the path configuration {@link 'app-config'}.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {string} action - HTTP method string.
     * @returns {Promise.<true|Error>}
     */
    configBasedAuthorization(req, res, action) {
        Logger.info('Authorizing based on route config...'); /** @todo Remove */
        const config = this.config.authorization.permissions[action];
        //Logger.info(this.config); /** @todo Remove */
        const payload = req.$session.getPayload();
        // owner is validated in model controller

        if (payload.anonymous === true && !config.anonymous) {
            Logger.warn('This action is not allowed for anonymous users...');
            // this action is not allowed for anonymous users
            return Promise.reject(new res.$errors.UnauthorizedError(res.$codes.notAuthorized));
        } else if (config.owner) {
            Logger.info('Advancing owner...'); /** @todo Remove */
            // advance owner
            req.$owner = true;
            return Promise.resolve(true);
        }

        let type = false;
        let role = false;

        if (config.roles) {
            role = this.authorizeRole(payload.role, config.roles, req);
            if (req.$admin) {
                Logger.info('Authorized as admin...'); /** @todo Remove */
                // advance admin
                return Promise.resolve(true);
            }
        }

        if (config.types) {
            type = this.authorizeType(payload.user_type, config.types);
        }


        if (config.types && config.roles) {
            return this.compoundResolver(type, role, config.operator) ?
                Promise.resolve(true) : Promise.reject(new res.$errors.UnauthorizedError(res.$codes.notAuthorized));
        } else {
            Logger.info('Authorizing based on role or type'); /** @todo Remove */
            return (type || role) ?
                Promise.resolve(true) : Promise.reject(new res.$errors.UnauthorizedError(res.$codes.notAuthorized));
        }

    }

    /**
     * Resolves user authorization based on precedence or combination of type and role.
     * @param {number} type 
     * @param {number} role
     * @param {string} operator - The operation to applied on the role
     * @returns {boolean}
     */
    compoundResolver(type, role, operator) {
        Logger.info('Compound resolver...'); /** @todo Remove */
        const auth = false;
        switch (operator) {
            case '&&':
                // user must have both the role and type to perform action
                Logger.info('Compound role && type...'); /** @todo Remove */
                auth = (type && role);
                break;
            case 'X':
                Logger.info('Compound role XOR type...'); /** @todo Remove */
                // user must have either type or the role but not both
                auth = ((type && !role) || (!type && role));
            default:
                Logger.info('Compound role || type...'); /** @todo Remove */
                auth = (type || role);
        }
        return auth;
    }

    /**
     * Authorize user based on their role as defined in the path config.
     * @param {number} role 
     * @param {number} roles 
     * @param {Object} req - Express request object.
     * @returns {boolean} 
     */
    authorizeRole(role, roles, req) {
        Logger.info('Authorizing based role...'); /** @todo Remove */
        if ((roles & role) === req.$access.roles.admin) {
            // authorized as admin
            return req.$admin = true;
        }
        // authorize based on specified role
        return ((roles & role) === role);
    }

    /**
     * Authorize user based on their type as defined in the path config.
     * @param {number} type - The user type
     * @param {number} types - The authorized type(s)
     * @returns {boolean}
     */
    authorizeType(type, types) {
        Logger.info('Authorizing based on user type...', type); /** @todo Remove */
        return ((types & type) === type);
    }
}

module.exports = {
    /**
     * Factory constructor for Authorization.
     * @constructs
     * @param {Object} config
     */
    create: function (config) {
        return new Authorization(config);
    }
}