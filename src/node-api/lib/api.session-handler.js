/**
 * api.session-handler.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright (c) 2019 erassy.com
 * All rights reserved
 */
const _ = require('lodash');
const session = {
        /**
         * Checks if the sessions has been set.
         * @param {object} req - Express request object.
         * @return {boolean} - Returns true if it has been set or false otherwise.
         */
        check: function(req) {
            return req.session ? true : false;
        },
        /**
         * Checks if the auth for the session has been set
         * @param {object} req - Express request object.
         * @return {boolean} - Returns true if it has been set or false otherwise.
         */
        checkAuth: function(req) {
            return (this.check(req) && req.session.auth) ? true : false;
        },
        /**
         * Checks if the permissions for the session has been set.
         * @param {object} req - Express request object.
         * @return {boolean} - Returns true if it has been set or false otherwise.
         */
        checkPermissions: function(req) {
            return (this.checkAuth(req) && req.session.auth.permissions) ? true : false;
        },
        /**
         * A wrapper for lodash _.has() method
         * @param {object} parent - The object or array to search from.
         * @param {string} child - The element or property to search for.
         * @return {any}
         */
        has: function(parent, child) {
            return _.has(parent, child);
        },
        /**
         * Returns the value of a particular property from the session.
         * @param {object} req - Express request object.
         * @param {string} item - The key or property of the session.
         * @return {boolean} - Returns the value of the key or property exist or false otherwise.
         */
        get: function(req, item) {
            return (this.check(req) && this.has(req.session, item)) ? req.session[item] : undefined;
        },
        /**
         * Returns the auth object from the sessions.
         * @param {object} req - Express request object.
         * @return {object} - Returns the auth object or undefined.
         */
        getAuth: function(req) {
            return this.get(req, auth);
        },
        /**
         * Returns the permissions object from the session.auth
         * @param {object} req - Express request object.
         * @return {object} - Returns the permissions object or undefined.
         */
        getPermissions: function(req) {
            return this.checkPermissions(req) ? req.auth.permissions : undefined;
        },
        /**
         * Set a property of the sessions.
         * @param {object} req - Express request object.
         * @param {string} key - The key or property of the session to set.
         * @param {any} value - The value to be set.
         * @return {void}
         */
        set: function(req, key, value) {
            if (this.check(req)) {
                req.session[key] = value;
            }
            return;
        },
        /**
         * Set a particular property of the auth, creates the auth property if it does not exist.
         * @param {object} req - Express request object.
         * @param {string} key - The key/property to set.
         * @param {string} value - The value of the property to be set.
         * @return {void}
         */
        setAuth: function(req, key, value) {
            if (this.checkAuth(req)) {
                this.set(req, 'auth', {});
            }
            this.session.auth[key] = value;
            return;

        },
        /**
         * Sets a property of permissions, create permissions if it does not already exists.
         * @param {object} req - Express request object.
         * @param {string} key - The key/property to be added to permissions.
         * @param {any} value - The value to be added to permissions
         * @return {void}
         */
        setPermissions: function(req, key, value) {
            if (this.checkPermissions(req)) {
                this.setAuth(req, 'permissions', {});
            }
            this.session.auth.permissions[key] = value;
            return;
        }
    }
    /**
     * Sessions handling module
     */
module.exports = session;