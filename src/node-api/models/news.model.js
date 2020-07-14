/**
 * News Model
 * @module "clib/ticket"
 * @author Brandon Cockrell<brandon@pip-tech.com>
 * @copyright (c) pip-tech
 * All rights reserved
 */
const Model = require('../core/model');
const mongoose = require('mongoose');


const schema = {
    news: {
        type: String,
        
        required: true
    }
};

const dictionary = {
    id: '_id',
    news: 'news',
};

const options = {
    createExclude: ['_id'],
    updateExclude: ['_id'],
    // ownerKey: '_id',
    readExclude: ['deleted'],
    createAuthMap: {
        user: 'sub'
    },
    ownerKey: 'userID',
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

const model = Model.create('news', schema, dictionary, options, schemaOptions);
module.exports = model.getModel();