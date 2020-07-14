/**
 * jwt.utilities.js
 * @module lib/util/jwt
 * @author Erastus Nathingo<contact@erassy.com>
 * @copyright (c) erassy.com
 * All rights reserved
 */

// module dependencies
const util = require('util');
let jwt = require('jsonwebtoken');

// promisify
jwt.sign = util.promisify(jwt.sign);
jwt.verify = util.promisify(jwt.verify);

module.exports = jwt;