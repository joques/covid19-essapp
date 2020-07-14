/**
 * auth.utilities.js
 * @module lib/util/auth
 * @author Erastus Nathingo<contact@erassy.com>
 * @copyright (c) erassy.com
 * All rights reserved
 */

// module dependenices
const jwt = require('jwt-express');
const config = require('../app.config');
const secretify = require('../lib/api.jwt-secret');

/**
 * Creates a JWT authentication token.
 * @param {Request} req - Express request object.
 * @param {Object<string,*>} user - User data Object.
 * @param {Object<string,*>} auth - Authorization data object.
 * @returns {Promise<Object>}
 */
function createAuthToken(req, user, auth) {
    const client = req.get('User-Agent');
    return secretify.setSecret(user.id, client).then(secret => {
        return Promise.resolve(jwt.create(secret.secret, {
            sub: user.id,
            user,
            auth,
            client,
            iss: config.iss,
            aud: config.aud,
            sessid: secret.sessid,
            exp: Math.floor((Date.now() + config.tokenExpires) / 1000)
        }));
    });
}

/**
 * Creates a JWT for an applicatipn
 * @param {Request} req - Express request object.
 * @param {Object} user - User data object.
 * @param {Object} auth - Authorization data object.
 * @param {Object} app - Application data object.
 * @returns {Promise<Object>}
 */
function createAppToken(req, user, auth, app) {
    return Promise.resolve(jwt.create(app.secret, {
        sub: user.id,
        user,
        auth,
        iss: config.iss,
        aud: app.aud,
        exp: Math.floor((Date.now() + config.authTokenExpire) / 1000)
    }));
}

/**
 * Creates a single sign on token
 * @param {Request} req - Express request object.
 * @param {(string|number)} userID - User id
 * @returns {Object}
 */
function createSSOToken(req, userID, appID) {
    return jwt.create(config.ssoSecret, {
        sub: userID,
        createdby: appID,
        client: req.get('User-Agent'),
        exp: Math.floor((Date.now() + config.tokenExpires) / 1000)
    });
}
module.exports = {
    createAuthToken,
    createAppToken,
    createSSOToken
}