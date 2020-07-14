/**
 * Authentication Module
 * @module "clib/authentication"
 * @author Erastus Nathingo<contact@erassy.com>
 * @copyright (c) erassy.com
 * All rights reserved
 */

// module dependencies
const _ = require('lodash');
const config = require('../app.config');
const Logger = require('../lib/logger');

/**
 * Authentication Middleware, all paths requiring authentication should pass this middleware.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {function} next - Express next function callback. 
 */
function authentication(req, res, next) {
    Logger.info('Authenticating'); /** @todo Remove */
    Promise.resolve().then(() => {
        if (_.isEmpty(req.jwt.token)) {
            // no token present
            return Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.notToken));
        } else if (!req.jwt.valid) {
            return Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.invalidToken));
        } else if (req.jwt.payload.iss === config.iss && req.jwt.payload.aud === config.aud) {
            //Logger.info(req.jwt.payload.iss); /** @todo Remove */
            // token validated
            return Promise.resolve(true);
        } else {
            // not what we are expecting
            return Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.unexpectedToken));
        }
    }).then(() => {
        next();
    }).catch(next);
}
module.exports = authentication;