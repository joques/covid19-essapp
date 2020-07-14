/**
 * authorize.route.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */
const _ = require('lodash');
const express = require('express');
const Logger = require('../lib/logger');
const config = require('../app.config');
const hash = require('../lib/hash.utility');
const jwt = require('../custom-lib/jwt.utilities');
const authUtil = require('../custom-lib/auth.utilities');
const ModelController = require('../core/model-controller.factory');
const router = express.Router();

const userController = ModelController.create('user.model');
const controller = ModelController.create('authentication.model');
const authController = ModelController.create('authorization.model');
const appController = ModelController.create('merchant.model');
const authModel = require('../models/authentication.model');

router.post('/', function (req, res, next) {
    let user = {},
        auth = {},
        app = {},
        authObject = {};
    Promise.resolve().then(() => {
        // get app data
        return req.body.appID ? appController.getOneByID(req, req.body.appID, true) : Promise.resolve();
    }).then(data => {
        app = data;
        if (req.body.appID && _.isEmpty(app)) {
            return Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.appDoesNotExist));
        }
        const appID = +req.body.appID ? app.id : config.appID;
        // get app authorization for the user
        return authController.getOne({
            userID: req.body.username
        }, true).then(_data => {
            return authController.translate(_data);
        });
    }).then((data) => {
        auth = data;
        // get users authentication data
        return _.isEmpty(data) ? Promise.reject(new res.$errors.UnauthorizedError(res.$codes.invalidCredentials)) :
            controller.getOne({
                username: req.body.username,
                active: true
            }, true);
    })
        // check if user is locked out
        .then(data => {
            authObject = data;
            //console.log('Returned User: ', authObject);
            // check if the account is currently locked
            if (authObject.lockUntil && authObject.lockUntil > new Date()) {
                // just increment login attempts if account is already locked
                //console.log("EE: ", res.$codes)
                return authModel.custom.incrementLoginAttempts(authModel.model, authObject).then(() => Promise.reject(new res.$errors.UnauthorizedError(res.$codes.accountLockout)))
            }
            return Promise.resolve(data);
        }).then(data => {
            // validate password
            return _.isEmpty(data) ? Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.noAuthUser)) :
                hash.compare(req.body.password, data.password);
        }).then((data) => {
            // Reset Login Attempts
            return data ? authModel.custom.resetLoginAttempts(authModel.model, authObject).then(() => userController.getOne({ username: req.body.username }, true)) :
                authModel.custom.incrementLoginAttempts(authModel.model, authObject).then(() => Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.invalidCredentials)))
        }).then(data => {
            user = data;
            return (req.body.appID) ? authUtil.createAppToken(req, user, auth, app) : authUtil.createAuthToken(req, user, auth);
        }).then(token => {
            //console.log('token: ', token);
            ssoToken = authUtil.createSSOToken(req, user.id, config.appID);
            ssoToken && res.cookie(config.ssoCookieName, ssoToken.token, {
                maxAge: config.ssoCookieExpires,
                httpOnly: false,
                signed: true
            });
            res.set('X-Token', token.token);
            return res.$json({
                user: token.payload.user,
                token: token.token
            });
        }).catch(error => {
            return next(error);
        });
}).get('/', function (req, res, next) {

    let user = {},
        auth = {},
        app = {},
        payload = {};

    Promise.resolve().then(() => {
        // check cookie and verify cookie token
        return (req.signedCookies && req.signedCookies[config.ssoCookieName]) ?
            jwt.verify(req.signedCookies[config.ssoCookieName], config.ssoSecret) :
            Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.noSSOCookie));
    }).then(data => {
        payload = data; // token payload
        //Logger.info(data); /** @todo Remove */
        // get application data
        return req.query.appID ? appController.getOneByID(req, req.query.appID, true) :
            Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.missingAppID));
    }).then(data => {
        app = data;
        if (_.isEmpty(app)) {
            return Promise.reject(new res.$errors.UnauthenticatedError($res.codes.appDoesNotExist));
        }
        const appID = +req.query.appID;

        // get application authorization for the user
        return authController.getOne({ appID: appID }, true).then(_data => {
            return authController.translate(_data);
        });
    }).then(data => {
        auth = data;
        return _.isEmpty(data) ? Promise.reject(new res.$errors.UnauthenticatedError(res.$codes.noAuthUser)) :
            userController.getOneByID(req, payload.sub); // get user data
    }).then(data => {
        user = data;
        return authUtil.createAppToken(req, user, auth, app);
    }).then(token => {
        res.set('X-Token', token.token);
        return res.$json({
            token: token.token
        });
    }).catch(error => {
        return next(error);
    });
});
module.exports = router;