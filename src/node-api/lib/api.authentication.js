/**
 * Description api.authentication.js
 *
 * @author Erastus Nathingo <contact@erassy.com> 
 * @copyright (c) 2017 Jonas Tomanga 
 * All rights reserved 
 */
/**
 * This module is responsible for handling authentications concerns only.
 * This module uses Firebase Authentication Admin Library.
 */
const _ = require('lodash');
const Logger = require('../lib/logger');
const admin = require('firebase-admin');
const config = require('../app.config');

// initializing firebase admin
try {
    Logger.info('Initializing Firebase Admin'); /** @todo Remove */
    admin.initializeApp({
        credential: admin.credential.cert(config.firebaseCredentials)
    });
} catch (error) {
    Logger.warn(error);
}
/**
 * This methods authenticates a user using the Firebase Authentication Admin Library.
 * If the user is successfully authenticated the express next function is called to forwarding the request to the relevant handler.
 * If the user is not authenticated an express response is sent back with a 401 header.
 * @param {object} req - Express request object. 
 * @param {object} res - Express response object.
 * @param {Function} next - Express next function
 */
function authentication(req, res, next) {
    Logger.info('Authenticating'); /** @todo Remove */
    let token = null;
    if (_.isEmpty(req.jwt.token)) {
        // no token present
        next(new res.$errors.UnauthenticatedError(res.$codes.notToken));
    } else if (req.jwt.token && req.jwt.payload.iss === config.iss) {
        // validate local token
        req.jwt.valid ? next() : next(new res.$errors.UnauthenticatedError(res.$codes.invalidToken));
    } else if (req.jwt.token && req.jwt.payload.iss === config.fbISS) {
        // validate Firebase token
        admin.auth().verifyIdToken(req.jwt.token).then(info => {
            Logger.info('User authenticated'); /** @todo Remove */
            next();
            return;
        }).catch(error => {
            Logger.warn('Firebase failed to authenticate token');
            next(new res.$errors.UnauthenticatedError(res.$codes.invalidToken));
            return;
        });
    } else {
        // not what we are expecting
        next(new res.$errors.UnauthenticatedError(res.$codes.unexpectedToken));
    }

}
module.exports = authentication;