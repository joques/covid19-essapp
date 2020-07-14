/**
 * @module models/users
 * @author Erastus Nathingo<contact@erassy.com>
 * @copyright (c) erassy.com
 * All rights reserved
 */

// module dependencies
const Model = require('../core/model');
const mongoose = require('mongoose');
const access = require('../config/access');

/** User schema definitions */
const schema = {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true,
        default: access.roles.standard,
        enum: Object.values(access.roles)
    },
    type: {
        type: Number,
        required: true,
        default: access.types.none,
        enum: Object.values(access.types)
    },
    mobileNr: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    workTel: {
        type: String
    },
    homeTel: {
        type: String
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'branch'
    },
    merchant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'merchant'
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        suburb: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    employeeNr: {
        type: String
    }
};

/** User dictionary */
const dictionary = {
    id: '_id',
    merchant: 'merchant',
    branch: 'branch',
    username: 'username',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    type: 'type',
    emailAddress: 'emailAddress',
    mobileNr: 'mobileNr',
    workTel: 'workTel',
    homeTel: 'homeTel',
    address: 'address',
    employeeNr: 'employeeNr'
};

const options = {
    createExclude: ['_id'],
    updateExclude: ['_id'],
    // ownerKey: '_id',
    readExclude: ['password', 'deleted'],
    createAuthMap: {
        user: 'sub'
    },
    ownerKey: 'userID',
    // custom: {
    //     /**
    //      * @description middleware for checking if requester if owner or admin then returns appropriate response
    //      */
    //     read: (req, res, next) => {
    //         const user = req.$session.getPayload().user;
    //         if (user) {
    //             req.$admin && (req['query'] = { match: `branch=${user.branch}` }) && next()
    //             req.$owner && next();
    //             (!(req.$admin || req.$owner)) && (req['query'] = { match: `id=${user.id}` }) && next()
    //         } else {
    //             next();
    //         }
    //     }
    // }
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

const model = Model.create('user', schema, dictionary, options, schemaOptions);
module.exports = model.getModel();