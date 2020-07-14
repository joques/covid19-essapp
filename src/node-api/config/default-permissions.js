/**
 * default-permissions.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * All rights reserved
 */
const _ = require('lodash');
const access = require('./access');
const shared = {}
const driver = {

}

const passenger = {

}
module.exports = {
    default: shared,
    passenger: _.extend(passenger, shared),
    driver: _.extend(driver, shared)
};