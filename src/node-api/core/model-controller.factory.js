/**
 * model-controller.factory.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */
const ModelController = require('./model-controller');
const Logger = require('../lib/logger');
const _ = require('lodash');
require('colors')
let ModelControllerFactory = function () {
    return {
        create: function (model) {
            Logger.trace(`Creating ${model.blue} controller through Factory`);
            let Model = require("../models/" + model);
            return new ModelController(Model);
        }
    }
}
module.exports = ModelControllerFactory();