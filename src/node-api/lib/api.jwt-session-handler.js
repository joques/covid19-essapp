/**
 * api.session-handler.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright (c) erassy.com
 * All rights reserved
 */
const _ = require('lodash');
const Logger = require('../lib/logger');
const session = {
        /**
         * Checks if the jwt object has been set.
         * @param {object} req - Express request object.
         * @return {boolean} - Returns true if it has been set or false otherwise.
         */
        req: null,
        check: function() {
            return this.req.jwt ? true : false;
        },
        /**
         * Checks if the jwt payload has been set
         * @param {object} req - Express request object.
         * @return {boolean} - Returns true if it has been set or false otherwise.
         */
        checkPayload: function() {
            return (this.check(this.req) && this.req.jwt.payload) ? true : false;
        },
        /**
         * Checks if the permissions for the session has been set.
         * @param {object} req - Express request object.
         * @return {boolean} - Returns true if it has been set or false otherwise.
         */
        checkPermissions: function() {
            return (this.checkPayload(this.req) && this.req.jwt.payload.permissions) ? true : false;
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
        get: function(item) {
            return (this.checkPayload(this.req) && this.has(this.req.jwt.payload, item)) ? this.req.jwt.payload[item] : undefined;
        },
        /**
         * Returns the auth object from the sessions.
         * @param {object} req - Express request object.
         * @return {object} - Returns the auth object or undefined.
         */
        getPayload: function() {
            return this.checkPayload(this.req) ? this.req.jwt.payload : undefined;
        },
        /**
         * Returns the permissions object from the session.auth
         * @param {object} req - Express request object.
         * @return {object} - Returns the permissions object or undefined.
         */
        getPermissions: function() {
            return this.checkPermissions(this.req) ? this.req.jwt.payload.permissions : undefined;
        },

        getUID: function() {
            const payload = this.getPayload();
            return payload ? payload['sub'] : payload;
        }
    }
    /**
     * Sessions handling module
     */
module.exports = (req) => {
    session.req = req;
    return session;
};