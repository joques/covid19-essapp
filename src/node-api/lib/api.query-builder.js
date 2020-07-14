/**
 * api.query-builder.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

// module dependencies
const _ = require('lodash');
const Logger = require('./logger');
const helpers = require('./api.helpers');
const iterators = require('./iterators.utilities');

/**
 * Build the aggregation pipeline for mongodb based on the query of the request.
 * @see {@link https://docs.mongodb.com/manual/aggregation/|MongoDB Aggregation}
 */
class QueryBuilder {
    constructor() {
        /**
         * @type {Object}
         * @default
         */
        this.schema = null;
        /**
         * @type {Dictionary}
         * @default
         */
        this.dictionary = null;

        // bind {this} to class methods
        this.defaults = this.defaults.bind(this);
        this.buildQuery = this.buildQuery.bind(this);
        this.defaultQuery = this.defaultQuery.bind(this);
        this.enqueue = this.enqueue.bind(this);
        this.defaults();
        this.build = this.build.bind(this);
        this.match = this.match.bind(this);
        this.sort = this.sort.bind(this);
        this.limit = this.limit.bind(this);
        this.projection = this.projection.bind(this);
        this.skip = this.skip.bind(this);
    }

    /**
     * Resets the pipeline
     */
    defaults() {
        this.pipeline = [];
        this._pipeline = {};
        this.fail = false;
    }

    /**
     * Build the query using mongodb aggregation pipeline.
     * Text search must be the first in the pipeline if it is present.
     * @see {@link https://docs.mongodb.com/manual/tutorial/text-search-in-aggregation/}
     * @param {Object.<string, *>} query - Express query field
     * @returns {Promise.<*>}
     */
    build(query) {
        return new Promise((resolve, reject) => {
            let promises = []; // initialize promises queue
            let keys = Object.keys(query); // extract query keys
            // search must always run be first in the pipeline
            if (query.search) {
                this.enqueue(promises, query, 'search');
                keys = _.remove(keys, 'search'); // remove `search`
            }
            keys.forEach(key => {
                // Logger.info(key); /** @todo Remove */
                !_.isEmpty(query[key]) && this.enqueue(promises, query, key);
            });
            // Run all promises
            Promise.all(promises).then(data => {
                // put values in the pipeline in the order or the query
                Object.keys(this._pipeline).forEach(key => {
                    !_.isEmpty(this._pipeline[key]) && this.pipeline.push(this._pipeline[key]);
                });
                return resolve(true);
            }).catch(error => {
                Logger.warn(error);
                return reject(error);
            });
        });
    }

    /**
     * Creates a Promise queue for the aggregation pipeline builder.
     * @param {Array} promises - Array to hold the promises.
     * @param {Object.<string,*>} query - Express query field.
     * @param {string} key - The key to queued
     */
    enqueue(promises, query, key) {
        switch (key) {
            case 'limit':
                this._pipeline['limit'] = null;
                promises.push(this.limit(query));
                break;
            case 'match':
                this._pipeline['match'] = null;
                promises.push(this.match(query));
                break;
            case 'sort':
                this._pipeline['sort'] = null;
                promises.push(this.sort(query));
                break;
            case 'skip':
                this._pipeline['skip'] = null;
                promises.push(this.skip(query));
                break;
            case 'search':
                this._pipeline['search'] = null;
                promises.push(this.search(query));
                break;
            case 'include':
            case 'exclude':
                if (_.isEmpty(this._pipeline.project)) {
                    this._pipeline['project'] = null;
                    promises.push(this.projection(query));
                }
                break;
        }
    }

    /**
     * Builds a mongodb aggregation pipeline based on the request query parameters.
     * The pipeline is build based on the order of the query keys,
     * except for the search key or text search function which must always be first.
     * @param {Request} req - Express request object.
     * @example
     * If the request is example.com?limit=10&match=id=1
     * the pipeline produced will be in that order: [ {$limit: 10},{$match: {id: 1}}]
     * This query will return a document(s) with id=1 from the first 10 documents.
     * @returns {Promise<Array} 
     */
    buildQuery(req) {
        this.defaults();
        return new Promise((resolve, reject) => {
            if (_.isEmpty(req.query)) {
                this.defaultQuery();
                return resolve(this.pipeline);
            }
            return this.build(req.query).then(() => {
                _.isEmpty(this.pipeline) && this.defaultQuery(); // set default query if pipeline is empty.
                return resolve(this.pipeline);
            });
        });
    }

    /**
     * Sets the default aggregation pipeline.
     */
    defaultQuery() {
        // Logger.info('Setting default query...'); /** @todo Remove */
        this.pipeline = [{
            $match: {}
        }];
    }

    /**
     * Adds the text search match stage to the aggregation pipeline.
     * {@link https://docs.mongodb.com/manual/reference/operator/aggregation/match/}
     * @param {Object} query - Request query object.
     * @returns {Promise<boolean>}
     */
    match(query) {
        // Logger.info('Matching'); /** @todo Remove */
        return new Promise((resolve, reject) => {
            helpers.match(this.dictionary, query.match, this.schema).then(data => {
                this._pipeline.match = _.isEmpty(data) ? {
                    $match: {}
                } : {
                        $match: data
                    };
                return resolve();
            }).catch(error => {
                Logger.warn(error);
                return resolve(true);
            });
        });
    }

    /**
     * Adds the text search match stage to the aggregation pipeline.
     * {@link https://docs.mongodb.com/manual/reference/operator/aggregation/match/}
     * @param {Object} query - Request query object.
     * @returns {Promise<boolean>}
     */
    search(query) {
        // Logger.info('Searching'); /** @todo Remove */
        if (query.search) {
            this._pipeline.search = {
                $match: {
                    $text: {
                        $search: query.search
                    }
                }
            };
        }
        return Promise.resolve(true);
    }

    /**
     * Adds the limit stage to the aggregation pipeline.
     * {@link https://docs.mongodb.com/manual/reference/operator/aggregation/limit/}
     * @param {Object} query - Request query object.
     * @returns {Promise<boolean>}
     */
    limit(query) {
        // Logger.info('Auto Limiting'); /** @todo Remove */
        if (Number.isInteger(+query.limit)) {
            this._pipeline.limit = {
                $limit: +query.limit
            };
        }
        return Promise.resolve(true);
    }

    /**
     * Adds the sort stage to the aggregation pipeline.
     * {@link https://docs.mongodb.com/manual/reference/operator/aggregation/sort/}
     * @param {Object} query - Request query object.
     * @returns {Promise<boolean>}
     */
    sort(query) {
        // Logger.info('Auto sorting'); /** @todo Remove */

        let [key, value] = helpers.split(query.sort, ":"); // split sort value
        if (query.search && key === 'search') {
            // sort by text search score value
            this._pipeline.sort = {
                $sort: {
                    score: {
                        $meta: 'textScore'
                    }
                }
            };
        } else if (_.has(this.dictionary, key)) {
            this._pipeline.sort = {
                $sort: {
                    [this.dictionary[key]]: +value
                }
            };

        } else {
            this._pipeline.sort = {
                $sort: {
                    _id: 1
                }
            };
        }
        return Promise.resolve(true);
    }

    /**
     * Adds the skip stage to the aggregation pipeline
     * {@link https://docs.mongodb.com/manual/reference/operator/aggregation/skip/}
     * @param {Object} query - Request query object.
     * @returns {Promise.<boolean>}
     */
    skip(query) {
        // Logger.info('Skipping...'); /** @todo Remove */
        if (Number.isFinite(+query.skip)) {
            this._pipeline.skip = {
                $skip: +query.skip
            };
        }
        return Promise.resolve(true);
    }

    /**
     * Adds the project stage to the aggregation pipeline base on the query.
     * {@link https://docs.mongodb.com/manual/reference/operator/aggregation/project/}
     * @param {Object} query - Request query object.
     * @returns {Promise<boolean>}
     */
    projection(query) {
        // Logger.info('Projection...'); /** @todo Remove */
        if (_.has(this._pipeline, 'project.$project')) {
            return Promise.resolve(true);
        }
        let projection = {};
        return new Promise((resolve, reject) => {
            query.include && this.project(query.include, projection, 1);
            query.exclude && this.project(query.exclude, projection, 0);
            if (!_.isEmpty(projection)) {
                this._pipeline.project = {
                    $project: projection
                };
            }
            return resolve(true);
        });
    }

    /**
     * Projection helper
     * @param {string} values - CSV string of fields to project.
     * @param {Object} projection - Projection object.
     * @param {number} value - 1 for include and 0 for exclude.
     */
    project(values, projection, value) {
        let keys = helpers.split(values);
        _.each(keys, key => {
            if (_.has(this.dictionary, key)) {
                projection[this.dictionary[key]] = value;
            }
        });
    }
    /** @todo implement populate feature */
    populate(query) {
        Logger.info('Populating...'); /** @todo Remove */
    }
}
module.exports = {
    create: (schema, dictionary) => {
        let queryBuilder = new QueryBuilder();
        queryBuilder.dictionary = dictionary;
        queryBuilder.schema = schema;
        return queryBuilder;
    }
};