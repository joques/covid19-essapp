/**
 * Model Module
 * @module core/model
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

/**
 * @global
 * @typedef {object} model
 * @property {object} model - Mongoose model object.
 * @property {Object.<string, string>} dictionary
 * @property {Array.<string>} createExclude
 * @property {Array.<string>} updateExclude
 * @property {Array.<string>} readExclude
 * @property {Array.<string>} exclusive
 * @property {object} createAuthMap
 * @property {object} updateAuthMap
 * @property {Object} schema - Mongoose Schema object.
 * @property {string} ownKey
 */

/**
 * @global
 * @typedef {Object.<string, string>} dictionary
 */

require('mongoose-geojson-schema');
const mongoose = require('mongoose');
const db = require('../lib/api.database');
const ai = require('mongoose-auto-increment'); // auto-increment plugin
const uniqueValidator = require('mongoose-unique-validator');
const idvalidator = require('mongoose-id-validator');

class Model {
    /**
     * Model constructor
     * @param {string} name - Name of the model.
     * @param {Object} schema - Mongoose schema object. {@link http://mongoosejs.com/docs/guide.html|Mongoose-Schema}
     * @param {Object.<string, *>} options - For setting the model's properties.
     * @param {Object.<string, *>} schemaOptions - Mongoose schema options.
     */
    constructor(name, schema, dictionary, options, schemaOptions) {
        /** @type {string} */
        this.name = name;

        /** @type {Object} */
        this.schema = {
            ...schema,
            deleted: {
                type: Boolean,
                default: false
            },
            createdAt: {
                type: Date
            },
            updatedAt: {
                type: Date
            },
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            updatedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        };

        this.schemaOptions = {
            ...schemaOptions,
            timestamps: true
        }
        /** @type {dictionary} */
        this.dictionary = {
            ...dictionary,
            deleted: 'deleted',
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
            createdBy: 'createdBy',
            updatedBy: 'updatedBy'
        };
        this.setOptions(options);
        /**
         * @type {Schema}
         * @see module:"lib/database"
         */
        this.model = new db.Schema(this.schema, this.schemaOptions)
            .plugin(uniqueValidator, { message: '{PATH} should be unique.' }).plugin(idvalidator);
    }

    /**
     * Sets the properties of the model
     * @param {Object.<string,*> } options 
     */
    setOptions(options) {
        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                this[key] = options[key];
            }
        }
    }

    /**
     * Enable Auto Increment on a particular field of the document.
     * @see {@link https://www.npmjs.com/package/mongoose-auto-increment|mongoose-auto-increment}
     * @param {string} [field='_id'] - The field to be used for auto increment.
     * @param {integer} [start=1] - The number to start incrementing from.
     * @returns {Model} <code>this</code>
     */
    enableAI(field = '_id', start = 1) {
        ai.initialize(db.connection);
        this.model.plugin(ai.plugin, {
            model: this.name,
            field: field,
            startAt: start
        }); /** Adds Auto increment plugin */
        return this;
    }
    /**
     * Returns the model and its configs
     * @see {@link http://mongoosejs.com/docs/guide.html|Mongoose-Schema}
     * @returns {model}
     */
    getModel() {
        return {
            model: db.model(this.name, this.model),
            dictionary: this.dictionary,
            createExclude: this.createExclude,
            updateExclude: this.updateExclude,
            readExclude: this.readExclude,
            exclusive: this.exclusive,
            populate: this.populate,
            createAuthMap: this.createAuthMap,
            updateAuthMap: this.updateAuthMap,
            schema: this.schema,
            custom: this.custom,
            ownerKey: this.ownerKey
        }
    }
    /**
     * Creates and index on the specified field(s).
     * @see {@link http://mongoosejs.com/docs/2.7.x/docs/indexes.html|Mogoose-Index}
     * @param {Object.<string, number>} index - The index object.
     * @param {Object.<string, boolean>} [options] - The index options
     * @returns {Model} <code>this</code>
     */
    createIndex(index, options) {
        this.model.index(index, options);
        return this;
    }

    /**
     * Adds a virtual property, getter and setter for the virtual property.
     * @param {string} name - The name of the virtual property
     * @param {function} getter - The getter function for the property.
     * @param {function} setter - The setter function for the property.
     * @returns {Model} <code>this</code>
     */
    createVirtual(name, getter, setter) {
        if (getter && typeof getter === 'function') {
            this.model.virtual(name).get(getter);
        }
        if (setter && typeof setter === 'function') {
            this.model.virtual(name).set(setter);
        }
        return this;
    }

    /**
     * Sets the createAuthMap property.
     * @param {Object.<string,string>} map
     * @returns {Model} <code>this</code>
     */
    setCreateAuthMap(map) {
        this.createAuthMap = map;
        return this;
    }

    /**
     * Sets the fields that are exclusive to the owner.
     * @param {Array<string>} exclusive
     * @returns {Model} <code>this</code>
     */
    setExclusive(exclusive) {
        this.exclusive = exclusive;
        return this;
    }

    /**
     * Sets the ownerKey property
     * @param {string} key
     * @returns {Model} <code>this</code>
     */
    setOwnerKey(key) {
        this.ownerKey = key;
        return this;
    }

    /**
     * Sets the updateAuthMap property.
     * @param {Object.<string,string>} map
     * @returns {Model} <code>this</code>
     */
    setUpdateAuthMap(map) {
        this.updateAuthMap = map;
        return this;
    }

    /**
     * Sets the readExclude property.
     * @param {Array.<string>} list
     * @returns {Model} <code>this</code>
     */
    setReadExclude(list) {
        this.readExclude = list;
        return this;
    }

    /**
     * Sets the createExclude property.
     * @param {Array.<string>} list
     * @returns {Model} <code>this</code>
     */
    setCreateExclude(list) {
        this.createExclude = list;
        return this;
    }

    /**
     * Sets the updateExclude property.
     * @param {Array.<string>} list
     * @returns {Model} <code>this</code>
     */
    setUpdateExclude(list) {
        this.updateExclude = list;
        return this;
    }

    /**
     * Sets the populate property.
     * @param {Array.<Object>} list
     * @returns {Model} <code>this</code>
     */
    setPopulate(list) {
        this.populate = list;
        return this;
    }
}

module.exports = {
    /** @constructs */
    create: function (name, schema, dictionary, options) {
        return new Model(name, schema, dictionary, options);
    },
    model: Model,
    Schema: db.Schema
};