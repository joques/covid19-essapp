/**
 * api.helpers.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */
const _ = require('lodash');
const Logger = require('./logger');
const mongoose = require('mongoose');

module.exports = {
    map: function (data, dict, omit = []) {
        // Logger.info('Transformation'); /** @todo Remove */
        if (_.isEmpty(data)) {
            return Promise.resolve([]);
        }
        return new Promise((resolve, reject) => {
            //let collection;
            const collection = _.isArray(data) ? _.map(data, values => {
                return _.omit(this.mapper(dict, values), omit);
            }) : _.omit(this.mapper(dict, data), omit);
            //Logger.info(JSON.stringify(collection)); /** @todo Remove */
            resolve(collection);
        });
    },
    mapInverse: function (data, dict, omit = []) {
        // Logger.info('Reverse Transformation'); /** @todo Remove */
        if (_.isEmpty(data)) {
            return Promise.resolve(null);
        }
        return new Promise((resolve, reject) => {
            dict = _.invert(dict);
            const collection = _.isArray(data) ? _.map(data, values => {
                return _.omit(this.mapper(dict, values), omit);
            }) : _.omit(this.mapper(dict, data), omit);
            //Logger.info(JSON.stringify(collection)); /** @todo Remove */
            resolve(collection);
        });
    },
    mapper: function (dict, values) {
        let map = {};
        for (key in values) {
            if (_.has(dict, key)) {
                map[dict[key]] = values[key];
            }
        }
        return map;
    },
    /** @todo Improve */
    /**
     * Aggregate keys that will have have to be returned by the database.
     * @param {object} dictionary - The dictionary that will be used to translate to database keys.
     * @param {object} keys - The keys to be translated and included.
     * @param {object} includes - The object currently holding the keys to be included.
     * @return {object}
     */
    include: (dictionary, keys, includes = {}) => {
        _.each(keys, val => {
            (dictionary[val]) ? includes[dictionary[val]] = 1 : void (null);
        });
        return includes;
    },
    /**
     * Aggregates keys that have to be populated by the database.
     * @param {object} dictionary - The dictionary that is used to translate to database keys
     * @param {object} keys - The keys to be translated and populated
     * @return {object}
     */
    populate: (dictionary, keys) => {
        let population = [];
        _.each(keys, val => {
            (dictionary[val]) ? population.push(dictionary[val]) : void (null);
        });
        return population;
    },
    /**
   * Aggregate keys that will not have to be returned by the database.
   * @param {object} dictionary - The dictionary that will be used to translate to database keys.
   * @param {object} keys - The keys to be translated and excluded.
   * @param {object} excludes - The object currently holding the keys to be excluded.
   * @return {object}
   */
    exclude: (dictionary, keys, excludes = {}) => {
        _.each(keys, val => {
            (dictionary[val]) ? excludes[dictionary[val]] = 0 : void (null);
        });
        return excludes;
    },
    /**
     * Aggregates database group aggregation
     * @param {object} dictionary - The dictionary that will be used to translate to database keys.
     * @param {object} keys - The keys to translated and grouped.
     * @param {string} agg - The type of aggregation
     * @param {object}  group - The object currently holding the aggregates.
     */
    group: (dictionary, keys, agg, group = {}) => {
        _.each(keys, val => {
            if (dictionary[val]) {
                group[val] = {};
                group[val][agg] = dictionary[val];
            }
        });
        return group;
    },
    /**
     * Match query with multiple values
     * @param {object} dictionary - The dictionary that will be used to translate to database keys
     * @param {object} keys - The keys to be translated and matched
     * @param {string} id - The field to match
     * @param {object} match - THe object currrently holding the match values.
     */
    matchArray: (dictionary, keys, id, match = {}) => {
        // let group = {};
        _.each(keys, (val, key) => {
            (dictionary[key] && val) ? match[id + "." + [dictionary[key]]] = val : void (null);
        });
        return match;
    },
    split: (values, seperator = ',') => {
        let sperator = "/\s*" + seperator + "\s*/";
        let regex = new RegExp(seperator);
        return values.split(regex);
    },
    match: function (dictionary, match, schema) {
        return new Promise((resolve, reject) => {
            let queries = {}; // initialize query holder
            values = this.split(match, ';');

            _.each(values, val => {
                let query = {};
                if (val.search(">=") > 0) {
                    query = this.greaterOrEqual(val, schema, dictionary);
                } else if (val.search("<=") > 0) {
                    query = this.lessOrEqual(val, schema, dictionary);
                } else if (val.search("!=") > 0) {
                    query = this.notEqual(val, schema, dictionary);
                } else if (val.search("<>") > 0) {
                    query = this.lessOrGreater(val, schema, dictionary);
                } else if (val.search("=") > 0) {
                    query = this.toEqual(val, schema, dictionary);
                } else if (val.search(">") > 0) {
                    query = this.greater(val, schema, dictionary);
                } else if (val.search("<") > 0) {
                    query = this.lesser(val, schema, dictionary);
                }
                if (!_.isEmpty(query)) {
                    _.merge(queries, query);
                }
            });
            /* translate to database keys */
            this.map(queries, dictionary).then(data => {
                resolve(data);
            }).catch(data => {
                reject(data);
            });
        });
    },

    stringToInt(object) {
        const booleanList = ['_id', 'id'];
        Object.keys(object).forEach(element => {
            if (booleanList.includes(element) && (typeof (object[element]) === 'string')) {
                object[element] = parseInt(object[element]);
            }
        });
        return object;
    },
    extract: function (string, seperator) {
        let point = string.search(seperator);
        let key = string.substring(0, point);
        let value = string.substring(point + seperator.length);
        return [key.trim(), value.trim()];
    },
    groupByOperators: function (dictionary, key, operators) {
        let group = {};
        if (_.has(dictionary, key)) {
            _.each(operators, val => {
                if (!_.has(dictn.operators, val)) {
                    return;
                }
                group[val] = {};
                group[val]['$' + val] = '$' + dictionary[key];
            });
            if (!_.isEmpty(group)) {
                group['_id'] = key
            }
        }
        return group;
    },
    typify: function (value, key, schema, dictionary) {
        const fill = '0'.repeat(24);


        if (_.isArray(value)) {
            feedback = [];
            _.each(value, val => {
                feedback.push(this.typify(val, key, schema));
            });
            return feedback;
        }
        if (_.has(dictionary, key)) {

            if (dictionary[key] === '_id') {
                return mongoose.Types.ObjectId((value + fill).slice(0, 24));
            }

            switch (schema[dictionary[key]].type.name) {
                case 'String':
                    return '' + value;
                case 'Number':
                    return parseFloat(value);
                case 'Date':
                    return new Date(value);

                case 'ObjectId':
                    return mongoose.Types.ObjectId((value + fill).slice(0, 24));
                case 'Boolean':
                    if ('true' === value) {
                        return true;
                    }
                    return ('false' === value) ? false : undefined;
                case undefined:
                    return value;
                default:
                    return value;
            }
        }
        return value;
    },
    /**
     * Converts a value to the relevant type base on the key
     * @member
     * @param {string|string[]} value - A string or array with the values to be converted
     * @param {string} key - The key to used as reference to convert
     * @return {string|string[]}
     */
    typify_: function (value, key = null) {
        if (_.isArray(value)) {
            feedback = [];
            _.each(value, val => {
                feedback.push(this.typify_(val, key));
            });
            return feedback;
        }
        if (key && key === 'date') {
            return new Date(value);
        }
        if (_.indexOf(dictn.numbers, key) > -1) {
            return +value;
        }
        return value;
    },
    /** operations convert functions */
    /**
     * Converts the equal sign operator into the equal sign for the Database and assigns the appropriate fields and values
     * @member
     * @param {string}  val
     * @return {object}
     */
    toEqual: function (val, schema, dic) {
        let [key, value] = this.extract(val, "=");
        let query = {};
        if (val.search(',') > 0) {
            query[key] = { $in: this.typify(this.split(value), key, schema, dic) };
        } else {
            query[key] = this.typify(value, key, schema, dic);
        }
        return query;
    },
    notEqual: function (val, schema, dic) {
        let query = {};
        let [key, value] = this.extract(val, "!=");
        if (val.search(',') > 0) {
            query[key] = { $nin: this.typify(this.split(value), key, schema, dic) };
        } else {
            query[key] = { $ne: this.typify(value, key, schema, dic) };
        }
        return query;
    },
    greaterOrEqual: function (val, schema, dic) {
        let query = {};
        let [key, value] = this.extract(val, ">=");
        query[key] = { $gte: this.typify(value, key, schema, dic) };
        return query;
    },
    lessOrEqual: function (val, schema, dic) {
        let query = {};
        let [key, value] = this.extract(val, "<=");
        query[key] = { $lte: this.typify(value, key, schema, dic) };
        return query;
    },
    lessOrGreater: function (val, schema, dic) {
        let query = {};
        let [key, value] = this.extract(val, "<>");
        [first, last] = this.split(value)
        query[key] = { $gt: this.typify(first, key, schema, dic), $lt: this.typify(last, key, schema, dic) };
        return query;
    },
    greater: function (val, schema, dic) {
        let query = {};
        let [key, value] = this.extract(val, ">");
        query[key] = { $gt: this.typify(value, key, schema, dic) };
        return query;
    },
    lesser: function (val, schema, dic) {
        let query = {};
        let [key, value] = this.extract(val, "<");
        query[key] = { $lt: this.typify(value, key, schema, dic) };
        return query;
    },
    /**
     * Converts string values `false` and `true` to boolean.
     * @function
     * @param {string}
     * @returns {(boolean|undefined)}
     */
    bool: function (val) {
        if ('true' === val) {
            return true;
        }
        return ('false' === val) ? false : undefined;
    }

}
