/**
 * Attach Module
 * @module lib/attach
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

// Module dependencies
const errors = require('../lib/errors');
const access = require('../config/access');
const session = require('../config/session');
const codes = require('../config/status-codes');
const status = require('../config/http-status');
const responder = require('../config/responder');
const permissions = require('../config/default-permissions');
const errMessages = require('../config/error-messages.config');

/**
 * Attach objects and functions to request and response objects;
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {function} next - Express next function.
 */
function attach(req, res, next) {
    // attach to request object
    try {
        /**
         * @type {Object.<string, *>}
         */
        req.$access = access;

        /**
         * @type {Object}
         */
        req.$session = session(req);

        /**
         * @type {Object}
         */
        req.$permissions = permissions;

        //attach to response object
        /**
         * @type {Object}
         */
        res.$codes = codes;
        /**
         * @type {Object}
         */
        res.$status = status;

        /**
         * Sends a json response to the client.
         * @function
         * @param {Object} feed - The json envelope or body
         * @param {number} status - The http status to respond with
         * @param {number} emptyStatus - The HTTP status to respond with if the body is empty.
         */
        res.$json = (feed = {}, status = 200, emptyStatus = 201) => {
            responder.json(req, res, feed, status, emptyStatus);
        };

        /**
         * @type {Object}
         */
        res.$errMsg = errMessages;

        /**
         * @type {Object}
         */
        res.$errors = errors;

        next();
    } catch (error) {
        next(error);
    }
}

module.exports = attach;