/**
 * routes.factory.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */
const Routes = require('./routes-controller');
const authentication = require('../config/authentication');
const authorization = require('../config/authorization');
const Logger = require('../lib/logger');
RoutesControllerFactory = function() {
    return {
        create: function(modelController, config) {
            let auth = authorization ? authorization.create(config) : null;
            return Routes(modelController, config, authentication, auth);
        }
    }
}
module.exports = RoutesControllerFactory();