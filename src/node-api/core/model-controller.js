/**
 * Model Controller Module
 * @module core/model-controller
 * @author Erastus Nathingo <contact@erassy.com> 
 * @license MIT
 */

const _ = require('lodash');
const Logger = require('../lib/logger');
const helpers = require('../lib/api.helpers');
const QueryBuilder = require('../lib/api.query-builder');
require('colors')
let prototype = {

    /** @todo search api */
}
/**
 * Model Controller
 * @class
 * @constructor
 * @param {model} model
 * @extends core/model.getModel
 */
function ModelController(model) {
    _.extend(this, model);

    /** @todo InsertMulti Method or support */

    /**
     * @type {QueryBuilder}
     * @see module:lib/"query-builder"
     */
    this.queryBuilder = QueryBuilder.create(model.schema, model.dictionary);

    this.userId = null;

    /**
     * Check if the model's ownerKey is set.
     * @returns {boolean}
     */
    this.checkOwnerKey = () => {
        return _.isString(this.ownerKey);
    }
    /**
     * Sets the createdBy field to the current User's ID
     * @returns {Object}
     */
    this.setCreatedBy = () => {
        return { createdBy: this.userId }
    }

    /**
     * Sets the updatedBy field to the current User's ID
     * @returns {Object}
     */
    this.setUpdatedBy = () => {
        return { updatedBy: this.userId }
    }

    /**
     * Sets cretedBy and UpdatedBy fields
     * @returns {Object}
     */
    this.setAuditFields = () => {
        return { ...this.setCreatedBy(), ...this.setUpdatedBy() }
    }
    /**
     * Create as promise reject for the ownerKey when it's not defined.
     * @returns {Promise.<Error>}
     */
    this.ownerKeyError = () => {
        return Promise.reject(new Error('Wrong Owners key...'));
    }

    /**
     * Constructs and returns the owner match object.
     * @param {Object} req - Express request object.
     * @returns {Object.<string, *>}
     */
    this.getOwnerObject = (req) => {
        return { [this.ownerKey]: req.$session.getUID() };
    }

    /**
     * Core get all method, gets all documents that matches the query and goes through the pipeline.
     * @param {Object} req - Express request object.
     * @param {Object} [prematch=undefined] - Mongodb match object, for early matching in the pipeline.
     * @param {boolean} [trans=false] - A flag whether the output result should be translated or not.
     * @returns {Promise.<Object|Error>}
     */
    this.get = (req, prematch = {}, trans = false) => {
        let queryBUILDER = QueryBuilder.create(model.schema, model.dictionary);
        // this.populator();
        return queryBUILDER.buildQuery(req).then(pipeline => {
            // return this.queryBuilder.buildQuery(req).then(pipeline => {
            // Logger.info('Pipeline'); /** @todo Remove */
            prematch = { ...prematch, deleted: false }
            pipeline = !_.isEmpty(prematch) ? _.concat([{ $match: prematch }], pipeline) : pipeline;
            //console.log('PIPE B4: '.cyan, pipeline);
            // add populator ($lookup) functions to the aggregation pipeline
            // pipeline = [].concat(pipeline, this.populator());
            console.log('PIPE: '.cyan, pipeline);
            return trans ? this.model.aggregate(pipeline).then(this.translate) : this.model.aggregate(pipeline);
        });
    }

    /**
     * A facade to get all documents matched by the query.
     * @param {object} req - Express request object.
     * @param {Object.<string, *>} [prematch] - Mongodb match object, for early matching in the pipeline.
     * @param {boolean} [trans] - A flag whether the output result should be translated or not.
     * @returns {Promise.<Object|Error>}
     */
    this.getAll = (req, prematch, trans) => {
        // return req.$owner ? this.get(req, this.getOwnerObject(req), trans) : this.get(req, prematch, trans);
        return this.get(req, prematch, trans);
    }

    /**
     * Inserts a document into a collection referenced by the model.
     * @param {Object.<string, *>} data - The data of the document to be inserted.
     * @param {Array.<string>} exclude - Fields to be excluded.
     * @param {boolean} trans - Whether to translate the results keys or not.
     * @param {boolean} rev - Whether to reverse the data keys or not.
     * @returns {Promise.<Object|Error>}
     */
    this.post = (data, exclude = [], trans = false, rev = true) => {
        data = { ...data, ...this.setAuditFields() };
        if (rev) {
            return this.reverse(data, exclude).then(data => {
                return trans ? this.model.insertMany(data).then(this.translate) : this.model.create(data);
            });
        } else {
            return trans ? this.model.insertMany(data).then(this.translate) : this.model.create(data);
        }
    }

    /**
     * A facade to insert a document into a collection. Data is directly extracted from the request object.
     * @param {Object} req - Express request object.
     * @param {boolean} trans - Whether to reverse the results keys or not.
     * @returns {Promise.<Object|Error>}
     */
    this.create = (req, trans) => {
        // sets the ID of the current user
        this.userId = this.getOwnerObject(req).userID;
        // return this.authMapper(req, this.createAuthMap).then(() => {
        return this.post(req.body, this.createExclude, trans);
        // });
    }

    /**
     * Removes document from a collection that matches the query.
     * @param {Object.<string, *>} match - An object of parameters and values to match.
     * @param {boolean} [trans=false] - Whether to reverse the results keys or not.
     * @param {boolean} [current=true] - To return current record or prev record.
     * @returns {Promise.<Object|Error>}
     */
    this.remove = (match, trans = false, current = true) => {
        return trans ? this.model.findOneAndRemove(match).then(this.translate) : this.model.findOneAndRemove(match);
    }

    /**
     * A facade to remove a document from a collection, can building the match object from the request.
     * @param {Object} req - Express request object.
     * @param {*} _id - The identifier of the object to be deleted.
     * @param {boolean} [trans] - Whether to reverse the results keys or not.
     * @param {boolean} [current] - To return current record or prev record.
     * @param {boolean} [forever] - to completely delete record or only set deleted flag to true
     * @returns {Promise.<Object|Error>}
     */
    this.delete = (req, _id, trans, current, forever = false) => {
        // sets the ID of the current user
        this.userId = this.getOwnerObject(req).userID;
        current = current ? current : helpers.bool(req.query.current);
        const match = { _id: req.params.id, deleted: false };
        // const match = req.$owner ? _.merge({ _id }, this.getOwnerObject(req)) : { _id };

        return forever === true ?

            /** Deleted Item from the datatabse */
            this.remove(match, trans, current) :
            /** Sets the updated fields to true */
            this.setUpdate(match, { deleted: true }, { upsert: false, returnNewDocument: current }, trans)
    }




    /**
     * A facade to push a document into an array part of a collection
     * @param {Object.<string, *>} match - An object of parameters and values to match.
     * @param {Object} data - Data to be updated
     * @param {boolean} [current] - To return current record or prev record.
     * @param {boolean} [trans] - Whether to reverse the results keys or not.
     * @example
     * instance.push('5adfs234234', { arrayName: {key1: value1, key2: value2} },true, true);
     * @returns {Promise.<Object|Error>}
     */
    this.push = (match, data, current = true, trans = true) => {
        data = { ...data, ...this.setUpdatedBy() };
        match = match ? match : { _id: match };
        //console.log('DATA to be pushed: ', data);
        return trans ? this.model.findOneAndUpdate(match, { $push: data }, { new: current, upsert: false }).then(this.translate) :
            this.model.findOneAndUpdate(match, { $push: data }, { new: current, upsert: false });
    },

        /**
         * Allows you to update a document with additional controls.
         * @see {@link http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate|Mongoose-FindOneAndUpdate}
         * @param {Object.<string, *>} match - An object of parameter and values to match.
         * @param {Object.<string, *>} options - Update options
         * @param {boolean} [trans=false] - Whether or not to translate the results keys.
         * @returns {Promise.<Object|Error>}
         */
        this.setUpdate = (match, body, options, trans = false) => {
            body = { ...body, ...this.setUpdatedBy() };
            return trans ? this.model.findOneAndUpdate(match, body, options).then(this.translate) : this.model.findOneAndUpdate(match, body, options);
        }


    /**
     * Updates a document in a collection matched by the match object.
     * @param {Object.<string, *>} body - The data to be updated to.
     * @param {Object.<string, *>} match - An object of parameters and values to match.
     * @param {Array.<string>} [exclude=[]] - The keys to exclude.
     * @param {boolean} [trans=false] - Whether or not to translate the results keys.
     * @param {boolean} [current=true] - To return current record or prev record.
     * @param {boolean} [rev=true] - Whether or not to reverse the data keys.
     * @returns {Promise.<Object|Error>}
     */
    this.updater = (body, match, exclude = [], trans = false, current = true, rev = true) => {
        // add modification date
        body = { ...body, ...this.setUpdatedBy() };
        if (rev) {
            return this.reverse(body, exclude)
                .then(data => {
                    return trans ? this.model.findOneAndUpdate(match, data, { new: current }).then(this.translate) : this.model.findOneAndUpdate(match, data);
                });
        } else {
            return trans ? this.model.findOneAndUpdate(match, body, { new: current }).then(this.translate) : this.model.findOneAndUpdate(match, body);
        };
    }

    /**
     * A facade to update a document in a collection, extracts the body from the requests.
     * @param {Object} req - Express request object.
     * @param {Object.<string, *>} match - An object of parameters and values to be matched
     * @param {boolean} trans - Whether or not to translate the results.
     * @param {boolean} [current] - To return current record or prev record.
     * @returns {Promise.<Object|Error}
     */
    this.update = (req, match, trans, current) => {
        // sets the ID of the current user
        this.userId = this.getOwnerObject(req).userID;

        /**@note my new and improved version */
        match = match ? { _id: req.params.id, deleted: false } : match
        return this.updater(req.body, match, this.createExclude, trans, current);
    }

    /**
     * Patch a document matched by the match object.
     * @param {Object} req - Express request object.
     * @param {Object} match - An object with parameters and values to be matched.
     * @param {boolean} trans - Whether or not to translate the results.
     * @param {boolean} [current] - To return current record or prev record.
     * @returns {Promise.<Object|Error>} - Returns a Promise with the previous document or an object of type Error.
     */
    this.patch = (req, match, trans, current) => {
        // sets the ID of the current user
        this.userId = this.getOwnerObject(req).userID;
        current = current ? current : helpers.bool(req.query.current);
        // match = req.$owner ? _.merge(match, this.getOwnerObject(req)) : match;
        return this.authMapper(req, this.updateAuthMap).then(() => {
            return this.updater(req.body, { ...match, deleted: false }, this.updateExclude, trans, current);
        });
    }

    /**
     * Patch a document matched by the specified id
     * @param {Object} req - Express request object.
     * @param {*} _id - The id of the object to be matched.
     * @param {boolean} trans - Whether or not to translate the results.
     * @returns {Promise.<Object|Error>} - Returns a Promise with the previous document or an object of type Error.
     */
    this.patchByID = (req, _id, trans) => {
        // sets the ID of the current user
        this.userId = this.getOwnerObject(req).userID;
        return this.patch(req, { _id }, trans);
    }

    /**
     * Gets a single document from a collection based on the match parameters
     * @param {Object} match - An object with parameters and values to be matched.
     * @param {boolean} trans - Whether or not to translate the results.
     * @returns {Promise.<Object|Error>} - Returns a Promise with the previous document or an object of type Error.
     */
    this.getOne = (match, trans = false) => {
        return trans ? this.model.findOne(match).then(this.translate) : this.model.findOne(match); //.then(this.translate);
    }

    /**
     * Gets a document from a collection based on the id
     * @param {Object} req - Express request object.
     * @param {*} _id - The id of the document.
     * @returns {Promise.<Object|Error>} - Returns a Promise with the previous document or an object of type Error.
     */
    this.getOneByID = (req, _id, trans) => {
        // sets the ID of the current user
        this.userId = this.getOwnerObject(req).userID;
        const match = req.$owner ? _.merge({ _id }, this.getOwnerObject(req)) : { _id };
        return this.getOne(match, trans);
    }

    this.findOne = (query, projection = {}) => {
        return this.model.findOne(query, projection); //then(this.translate);
    }

    /**
     * Roles back changes to the collection.
     * @param {*} _id - The id of the record to be rolled back.
     * @param {?Object.<string, *>} [data=null] - An object of the data to be rolled back.
     * @param {boolean} [insert=false] - A flag to indicate if an insert is required. This is necessary to rollback deleted records.
     * @returns {Promise.<Object|Error>} - Returns a Promise with the previous document or an object of type Error.
     */
    this.rollback = (_id, data = null, insert = false) => {
        Logger.info('Rolling back...'); /** @todo Remove */
        if (data && insert === true) {
            // rolling back deleted changes.
            return this.model.create(data);
        } else if (data) {
            // rolling back a modified record.
            return this.model.findOneAndUpdate({ _id }, _.omit(data, ['_id']));

        } else {
            // rolling back an inserted record
            return this.model.findOneAndRemove({ _id });
        }
    }

    /**
     * Wrapper to translate data from database keys to api keys.
     * @param {Object|Array.<Object>} data - The data coming from the database to be translated.
     * @returns {Promise.<Object|Array.<Object>|Error>} - Returns a document or collection of documents with translated keys.
     */
    this.translate = (data) => {
        // Logger.info('Translating...'); /** @todo Remove */
        return helpers.mapInverse(data, this.dictionary, this.readExclude);
    }

    /**
     * Wrapper to reverse data keys from api keys to database keys.
     * @param {Object|Array.<Object>} data - The data with keys to b reversed.
     * @returns {Promise.<Object|Array.<Object>|Error>} - Data with keys reversed.
     */
    this.reverse = (data, exclude = []) => {
        // Logger.info('Reversing...'); /** @todo Remove */
        return helpers.map(data, this.dictionary, exclude);
    }

    /**
     * Appends the request body with values from the authentication data.
     * @param {Object} req - Express request object.
     * @param {Object.<string, string>} map
     * @returns {Promise<boolean>}
     */
    this.authMapper = (req, map) => {
        return new Promise((resolve, reject) => {
            payload = req.$session.getPayload();
            if (!payload) {
                Logger.warn('Empty payload');
                reject(new Error('Session payload missing'));
            } else {
                _.each(map, (value, key) => {
                    try {
                        req.body[key] = payload[value];
                    } catch (error) {
                        reject(error);
                        return;
                    }
                });
                resolve(true);
            }
        });
    }

    /**
     * @name populator
     * @description adds a $loopkup aggregator to the aggregation pipeline
     * @returns {Array<Object>} an array of $lookup fields to be added to the aggregator pipeline
     */
    this.populator = () => {
        const populatable = (model.populate !== undefined);
        if (populatable) {
            const pipeline = model.populate.map(item => {
                return {
                    "$lookup": {
                        "from": item.reference,
                        "localField": item.local,
                        "foreignField": '_id',
                        "as": item.local + "_coll"
                    }
                }
            });
            // console.log('LOOKUP PIPE: '.red, pipeline);
            return pipeline;
        }
        return [];
    }
};
ModelController.prototype = prototype;
module.exports = ModelController;
