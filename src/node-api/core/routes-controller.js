/**
 * routes-controller.js
 * @module 'core/routes-controller'
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

require('../config/crud');
const _ = require('lodash');
const express = require('express');
const Logger = require('../lib/logger');

let RoutesController = function (modelController, config, authentication, authorization) {
    /** sub operations */
    this.router = express.Router();
    if (!config.methods) {
        Logger.warn('No methods defined');
        /** @todo Throw exception */
        return this.router;
    }


    /**
     * Checks if a custom middleware has been defined for the method and calls the custom middleware.
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express next function.
     */
    this.customWare = function (req, res, next) {
        const custom = (modelController.custom && modelController.custom[$CRUD[req.method]]) ? modelController.custom[$CRUD[req.method]] : null;
        // check if there is a custom middleware setup for this model
        if (custom && _.isFunction(custom)) {
            Logger.info('Running customware'); /** @todo Remove */
            custom(req, res, next); // forward to customware
        } else {
            next(); // forward to default handler
        }
    }

    /** Authentication middleware */
    if (config.authentication === true || _.has(config.authentication, _CRUD)) {
        // enable authentication for all HTTP methods
        this.router.use(authentication);
    } else if (_.isObject(config.authentication)) {
        // enable authentication for specified HTTP methods
        _.each(config.authentication, (paths, action) => {
            switch (action) {
                case _CREATE:
                    this.router.post(paths, authentication);
                    break;
                case _READ:
                    this.router.get(paths, authentication);
                    break;
                case _UPDATE:
                    this.router.put(paths, authentication);
                    break;
                case _DELETE:
                    this.router.delete(paths, authentication);
                    break;
                case _PATCH:
                    this.router.patch(paths, authentication);
            }
        });
    }

    /** Authorization middleware */
    if (authorization && (config.authorization === true || _.has(config.authorization, _CRUD))) {
        Logger.info('Adding authorization to all paths'); /** @todo Remove */
        // enable authorization check on all specified HTTP methods
        this.router.all('/*', authorization.authorizer);
    } else if (authorization && _.isObject(config.authorization) && _.isObject(config.authorization.permissions)) {
        Logger.info('Adding authorization per path.'); /** @todo Remove */
        // enable authorization on specified  HTTP paths
        _.each(config.authorization.permissions, (paths, action) => {
            Logger.info(action); /** @todo Remove */
            switch (action) {
                case _CREATE:
                    this.router.post('/*', authorization.authorizer);
                    break;
                case _READ:
                    this.router.get(['/:id', '/'], authorization.authorizer);
                    break;
                case _UPDATE:
                    this.router.put(['/:id'], authorization.authorizer);
                    break;
                case _DELETE:
                    this.router.delete(['/:id'], authorization.authorizer);
                    break;
                case _PATCH:
                    this.router.patch(['/:id'], authorization.authorizer);
                    break;
            }
        });
    }

    _.each(config.methods, method => {
        switch (method) {
            case _CREATE:
                Logger.info('Adding post support'); /** @todo Remove */
                this.router.post('/', this.customWare, function (req, res, next) {
                    modelController.create(req, true).then((doc) => {
                        res.$json(doc);
                    }).catch(next);
                });
                break;
            case _READ:
                Logger.info('Adding read support'); /** @todo Remove */
                this.router.get('/:id', this.customWare, function (req, res, next) {
                    Logger.info('Getting one...'); /** @todo Remove */
                    modelController.getOneByID(req, req.params.id).then((doc) => {
                        res.$json(doc);
                    }).catch((error) => {
                        next(error);
                    });
                }).get('/', this.customWare, function (req, res, next) {
                    modelController.getAll(req, {}, true).then((doc) => {
                        res.$json(doc);
                    }).catch((error) => {
                        next(error)
                    });
                });
                break;
            case _UPDATE:
                Logger.info('Adding update support'); /** @todo Remove */
                this.router.put('/:id', this.customWare, function (req, res, next) {
                    modelController.update(req, {}, true, false).then((doc) => {
                        res.$json(doc);
                    }).catch((error) => {
                        next(error)
                    });
                });
                break;
            case _DELETE:
                Logger.info('Adding delete support'); /** @todo Remove */
                this.router.delete('/:id', this.customWare, function (req, res, next) {
                    modelController.delete(req, req.params.id).then((doc) => {
                        res.$json(doc);
                    }).catch((error) => {
                        next(error)
                    });

                });
                break;
            case _PATCH:
                Logger.info('Adding patch support'); /** @todo Remove */
                this.router.patch('/:id', this.customWare, function (req, res, next) {
                    modelController.patchByID(req, req.params.id).then((doc) => {
                        res.$json(doc);
                    }).catch((error) => {
                        next(error)
                    });
                });
                break;
        }
    });

    return this.router;
}
module.exports = RoutesController;