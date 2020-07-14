/**
 * Redis Client Module
 * @module "lib/api/redis-client"
 * @see {@link https://www.npmjs.com/package/redis}
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * All rights reserved
 */

// module dependencies
const redis = require('redis');
const Logger = require('./logger');

const client = redis.createClient();

client.on('error', function (err) {
    global.redisConnected = false;
    Logger.warn('Redis Err: ', err);
}).on('connect', () => {
    Logger.info('Redis connected'.cyan); /** @todo Remove */
    global.redisConnected = true;
});
exports = module.exports = client;