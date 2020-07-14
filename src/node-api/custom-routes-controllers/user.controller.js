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
const hash = require('../lib/hash.utility');
const jwt = require('../custom-lib/jwt.utilities');
const authUtil = require('../custom-lib/auth.utilities');
const ModelController = require('../core/model-controller.factory');
const router = express.Router();
const modelName = 'user.model';
const userController = ModelController.create(modelName);
const controller = ModelController.create("authentication.model");
const authentication = require('../config/authentication');
const authController = ModelController.create('authorization.model');
const access = require('../config/access');

// configure User roles for create
const authorization = require('../config/authorization').create({
    authorization: {
        permissionID: 'users',
        permissions: {
            create: {
                owner: true,
                roles: access.roles.owner
            },
            delete: {
                owner: true,
                roles: access.roles.admin
            }
        }
    }
});

// // setup
router.all('*', authentication); // authenticate all requests.
router.all('/*', authorization.authorizer); // authorize all requests.

router.post('/', async (req, res, next) => {
    let step = 0; // transaction step counter
    let user = {};
    let authObj = {};
    let rootUser = req.body;

    hash.encrypt(req.body.password)// encrypt password;
        .then(password => {
            step++;
            req.body.password = password; // assign hashed password
            rootUser['password'] = password;
            return userController.create(req, true);
        }).then(_user => {
            step++;
            user = _user[0];
            req.body.password = rootUser.password; // assign hashed password
            req.body.username = rootUser.username; // assign id to username
            // capture user details
            return controller.create(req, true);
        }).catch(error => {
            // Transaction failure, rollback changes
            return (step > 1) ? userController.rollback(user.id).then(() => {
                return Promise.reject(error);
            }) : Promise.reject(error);
        }).then((auth) => {
            // Assign returned auth object for rollback purposes
            authObj = auth;
            step++;
            return authController.post({
                app: rootUser.merchant,
                user: req.body.username,
                role: rootUser.role ? rootUser.role : undefined,
                permissions: rootUser.permissions ? rootUser.permissions : undefined,
                type: rootUser.type ? rootUser.type : undefined,
            }, [], true, true)
        }).catch(error => {
            // Transaction failure, rollback changes
            return (step > 2) ? controller.rollback(authObj.id).then(() => {
                return Promise.reject(error);
            }) : Promise.reject(error);
        }).then(auth => {
            console.log('Auth: ', auth);
            res.$json(user); // json response
        }).catch((error) => {
            Logger.warn('User Registration failed.');
            Logger.info('Transaction failed at step ' + step); /** @todo Remove */
            next(error);
        });
})
    .delete('/:id', (req, res, next) => {
        let step = 0; // transaction step counter
        let user = null;
        let rootAuth = null;
        let encryptedPass = null;

        Logger.log(`Deleting ${req.params.id}`.red);
        userController.delete(req, req.params.id, true, true, true).then((data) => {
            if (data) {
                step++; //1
                Logger.log(`Deleted User ${data.username}`.green);
                user = data;
                return Promise.resolve(data);
            }
            return Promise.reject(new Error("Not Found"));
        }).then(deletedUser => {
            step++; //3
            Logger.log(`Fetching Authentication Details for ${deletedUser.username}`.cyan);
            return controller.getOne({ username: deletedUser.username }, true);
        }).then(authDetails => {
            // Assign returned details for rollback purposes
            rootAuth = authDetails;
            // Assign encrypted password to user object
            user['password'] = authDetails.password;
            step++; //3
            Logger.log(`Deleting Authentication Details for ${authDetails.username}`.red);
            return controller.delete(req, authDetails.id, true, true, true);
        }).catch(async (error) => {
            // Transaction failure, rollback changes

            if (step > 1) {
                // re-inserting the user because Authentication failed
                Logger.info(`Re-Inserting  ${user.username} because Authentication deletion failed`.cyan); /** @todo Remove */
                await userController.post(user, ['createdAt', 'updatedAt'], true, true);
                return Promise.reject(new res.$errors.ConflictError(res.$codes._56));
            }

            return Promise.reject(error);

        }).then(authDetails => {
            step++; //4
            Logger.log(`Fetching Authorization Details for ${authDetails.username}`.cyan);
            return authController.getOne({ userID: authDetails.username }, true);
        }).then(authorization => {
            // Assign returned details for rollback purposes
            rootAuthZ = authorization;
            step++; //5
            Logger.log(`Deleting Authorization Details for ${authorization.userID}`.red);
            return authController.delete(req, authorization.id, true, true);
        }).catch(async (error) => {
            // Transaction failure, rollback changes
            if (step > 3) {

                // re-inserting the user because Authorization failed
                Logger.info(`Re-Inserting  ${user.username} (User) because Authorization deletion failed`.cyan); /** @todo Remove */
                await userController.post(user, [], true, true);

                // re-inserting the authentication details because Authorization failed
                Logger.info(`Re-inserting the authentication because Authorization deletion failed`.cyan); /** @todo Remove */
                await controller.post(rootAuth, [], true, true);

                return Promise.reject(new res.$errors.ConflictError(res.$codes._56));
            }

            return Promise.reject(error);


        }).then(doc => {
            Logger.log(`Transaction completed: Delete ${user.username}`.green);
            res.$json(user); // json response
        }).catch((error) => {
            Logger.info(`Transaction failed at ${step} `.red); /** @todo Remove */
            next(error)
        });
    })
module.exports = router;