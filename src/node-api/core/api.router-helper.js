/**
 * API Router Helper Module
 * @module "lib/router-helper"
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright (c) 2017 Jonas Tomanga 
 * @license MIT
 */

// module dependencies
const _ = require('lodash');
const jwt = require('jwt-express');
const api = require('../routes.config');
const Logger = require('../lib/logger');
const config = require('../app.config');
const secret = require('../config/jwt-secret');
const ModelControllerFactory = require('./model-controller.factory');
const RoutesControllerFactory = require('./routes-controller.factory');
/**
 * Creates a new Routers
 * @class
 * @property {object} app - Express application object.
 */
function RouteControllers() {
    /**
     * Adds a route handler
     * @member {function}
     * @param {string} route - The path to be added
     * @param {function} handler - Express router handler
     * @returns {object} - Returns this object
     */
    this.add = (route, handler) => {
        this.app.use(route, handler);
        return this;
    };
    /**
     * Adds multiple route handlers
     * @member {function}
     * @param {object} routes - Routes object
     * @returns {object} - Returns this object
     */
    this.addMany = (routes) => {
        routes.forEach(function(route) {
            if (route.model) {
                this.add(route.path, RoutesControllerFactory.create(ModelControllerFactory.create(route.model), route));
            } else if (route.handler) {
                this.add(route.path, require("../custom-routes-controllers/" + route.handler));
            }
        }, this);
        return this;
    };
    /**
     * Adds the default routes defined in @see {@link ../app.config}
     * @member {function}
     * @param {object} [app] - Express object
     * @returns {object} - Returns this object
     */
    this.initialize = (app, tokens = true) => {
        if (app) {
            this.app = app;
            if (tokens) {
                this.app.use(secret.secretify).use(jwt.init(secret.getSecret, config.jwtOptions));
            }
        }
        this.addMany(api.routes);
        return this;
    };
    /**
     * Sets the app property of this object, should
     * @member
     * @param {object} app - Express app object
     * @returns {object} - Returns this object
     */
    this.setApp = (app, tokens = true) => {
        this.app = app;
        if (tokens) {
            this.app.use(secret.secretify).use(jwt.init(secret.getSecret, config.jwtOptions));
        }
        return this;
    }
}
module.exports = new RouteControllers;