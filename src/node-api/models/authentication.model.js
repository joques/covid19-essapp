/**
 * @module models/authentication
 * @author Erastus Nathingo<contact@erassy.com>
 * @copyright (c) erassy.com
 * All rights reserved
 */

const Model = require('../core/model');
const hash = require('../lib/hash.utility');
const moment = require('moment');


const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 2;


const schema = {
    username: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date },
};

const dictionary = {
    id: '_id',
    username: 'username',
    password: 'password',
    active: 'active',

    lockUntil: 'lockUntil',
    loginAttempts: 'loginAttempts',
};

const options = {
    createExclude: [],
    updateExclude: ['_id'],
    readExclude: [''],
    ownerKey: '_id',
    custom: {
        patch: (req, res, next) => {
            // encrypt password
            hash.encrypt(req.body.password).then(password => {
                req.body.password = password;
                next();
            }).catch(next);
        },
        /**
         * increases login attempts by 1
         * @param {Object} controller authentication model controoler
         * @param {Object} authModel auth model object
         */
        incrementLoginAttempts: (controller, authModel) => {

            // if we have a previous lock that has expired, restart at 1
            if (authModel.lockUntil && authModel.lockUntil < moment().toDate()) {
                console.log("Previous Lock detected: restarting at 1");
                const body = {
                    $set: { loginAttempts: 1 },
                    $unset: { lockUntil: 1 }
                }
                return controller.findOneAndUpdate({ username: authModel.username }, body).exec();
            }


            // otherwise we're incrementing
            // lock the account if we've reached max attempts and it's not locked already
            if (authModel.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !authModel.lockUntil) {

                const body = {
                    $inc: { loginAttempts: 1 },
                    $set: { lockUntil: moment().add(LOCK_TIME, 'hours') }
                }
                return controller.findOneAndUpdate({ username: authModel.username }, body).exec();
            }

            // Increase the login attempts if loginAtempts are less than maximum
            if (authModel.loginAttempts + 1 <= MAX_LOGIN_ATTEMPTS) {

                return controller.findOneAndUpdate({ username: authModel.username }, { $inc: { loginAttempts: 1 } }).exec();
            }

            return Promise.resolve(true);
        },
        /**
         * resets login attempts
         * @param {Object} controller authentication model controoler
         * @param {Object} authModel auth model object
         */
        resetLoginAttempts: (controller, authModel) => {
            // if we have a previous lock that has expired, restart at 1
            return controller.findOneAndUpdate({ username: authModel.username }, {
                $set: { loginAttempts: 0 },
                $unset: { lockUntil: 1 }
            }).exec();
        }
    }
};

const schemaOptions = {
    toJSON: {
        getters: true,
        virtuals: true
    },
    toObject: {
        getters: true,
        virtuals: true
    },
    bufferCommands: false
};

const model = Model.create('authentication', schema, dictionary, options, schemaOptions);
module.exports = model.getModel();