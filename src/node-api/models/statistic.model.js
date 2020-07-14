/**
 * Region model
 * @module models/track
 * @author Brandon Cockrell<brandon@pip-tech.com>
 * @copyright (c) pip-tech
 * All rights reserved
 */

// module dependencies
const Model = require('../core/model');
const mongoose = require('mongoose');

/** User schema definitions */
const schema = {
    confirmed: {
        type: Number,
        required: true
    },
    suspected: {
        type: Number,
        required: true
    },
    dead: {
        type: Number,
        required: true
    },
    recovered: {
        type: Number,
        required: true
    },
    worldwide: {
        type: Number,
        required: true
    },
    total_tested: {
        type: Number,
        required: true
    },,
    total_quarantined: {
        type: Number,
        required: true
    },,
    active_cases: {
        type: Number,
        required: true
    },

};

/** User dictionary */
const dictionary = {
    id: '_id',
    confirmed: 'confirmed',
    suspected: 'suspected',
    dead: 'dead',
    recovered: 'recovered',
    worldwide: 'worldwide',

    total_tested: 'total_tested',
    total_quarantined: 'total_quarantined',
    active_cases: 'active_cases'
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

const model = Model.create('statistic', schema, dictionary, options, schemaOptions);
module.exports = model.getModel();