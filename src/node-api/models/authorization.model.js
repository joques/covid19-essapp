/**
 * @module models/authorization
 * @author Erastus Nathingo<contact@erassy.com>
 * @copyright (c) erassy.com
 * All rights reserved
 */
const Model = require('../core/model');
const access = require('../config/access');
const permissions = require('../config/default-permissions');
const mongoose = require('mongoose');

const schema = {
    userID: {
        index: true,
        type: String,
        required: true
    },
    permissions: { type: Object, required: true, default: permissions.default },
    role: { type: Number, required: true, default: access.roles.standard, enum: Object.values(access.roles) },
    type: { type: Number, required: true, default: access.types.none, enum: Object.values(access.types) },

    appID: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true
    }
};

const dictionary = {
    id: '_id',
    user: 'userID',
    role: 'role',
    permissions: 'permissions',
    type: 'type',
    app: 'appID'
};

const options = {
    createExclude: ['entryDate', '_id'],
    updateExclude: ['_id', 'entryDate', 'appID', 'userID'],
    createAuthMap: {
        user: 'sub'
    },
    ownerKey: 'userID'
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

const model = Model.create('authorization', schema, dictionary, options, schemaOptions);
module.exports = model.getModel();