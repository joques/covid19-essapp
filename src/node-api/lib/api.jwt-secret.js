/**
 * JWT Secret Module
 * @module "lib/jwt-secret"
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

// module dependencies
const _ = require('lodash');
const util = require('util');
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');
const Logger = require('./logger');
const jwt = require('jsonwebtoken');
const config = require('../app.config');
const redisClient = require('./api.redis-client');

// convert to promises
redisClient.get = util.promisify(redisClient.get);
redisClient.set = util.promisify(redisClient.set);
redisClient.del = util.promisify(redisClient.del);

/**
 * Stores a user's secret in redis.
 * @param {string} sub - User id
 * @param {string} [secret]
 */
const setSecret = (sub, client, secret) => {
    secret = secret ? secret : uuidv4();
    const item = {
        secret,
        client,
        sessid: uuidv1(),
        expires: Date.now() + config.tokenExpires
    };
    return Promise.resolve().then(() => {
        return redisClient.get(sub);
    }).catch(error => {
        //Logger.info(data); /** @todo handle error correctly */
    }).then(data => {
        let secrets = [];
        try {
            data = JSON.parse(data);
            secrets = _.isArray(data) ? data : [];
        } catch (error) {
            Logger.warn(error);
        } !_.isEmpty(secrets) && removeExpiredSecrects(secrets);
        _.remove(secrets, {
            client
        }); // remove secrets for the same client
        // remove first secret if the list is full;
        if (secrets.length >= config.maxSessions) {
            secrets = secrets.slice(1, config.maxSessions);
        }
        secrets.push(item);
        Logger.info(secrets); /** @todo Remove */
        return redisClient.set(sub, JSON.stringify(secrets));
    }).then(() => {
        return item;
    });

}

/**
 * Gets the secret from redis or returns default secret.
 * @param {Request} req - Epxress request object.
 * @returns {string}
 */
const getSecret = (req) => {
    return _.isFunction(req.$secret) ? req.$secret() : null;
}

/**
 * Removes a secret from redis
 * @param {string} sub - User id
 */
const purgeSecret = (sub) => {
    return redisClient.del(sub);
}

const removeSecret = (sub, sessid) => {
    return redisClient.get(sub).then(secrets => {
        secrets = JSON.parse(secrets);
        secrets && _.remove(secrets, sessid);
        return redisClient.set(sub, JSON.stringify(secrets));
    });
}

/**
 * Resolves the jwt secret to be used for the given token
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {function} next - Express next function
 */
const secretify = (req, res, next) => {
    if (_.isEmpty(req.get('Authorization'))) {
        return next();
    }
    // check for subject and get secret from redis
    Logger.info('Getting secret...'); /** @todo Remove */
    const token = req.get('Authorization');
    const payload = jwt.decode(token.replace('Bearer ', '').trim());
    Promise.resolve().then(() => {
        if (_.isEmpty(payload)) {
            return Promise.reject(new Error('Payload missing...'));
        }
        Logger.info('Getting client secret...'); /** @todo Remove */
        return findSecret(removeExpiredSecrects(payload));
    }).then(secret => {
        req.$secret = () => {
            return secret;
        };
        next();
    }).catch(error => {
        Logger.warn(error);
        // use default secret
        req.$secret = () => {
            return config.jwtSecret;
        }
        next();
    });
};

/**
 * Extracts the secret used to sign the token
 * @param {Object<string,*>} payload  - JWT payload
 * @returns {Promise.<string>}
 */
function findSecret(payload) {
    return Promise.resolve().then(() => {
        if (!payload.sub || !payload.sessid) {
            return Promise.reject(false);
        }
        return redisClient.get(payload.sub);
    }).then(secrets => {
        secrets = JSON.parse(secrets);
        const item = _.find(secrets, {
            sessid: payload.sessid
        });
        return item ? Promise.resolve(item.secret) : Promise.reject(false);
    });
}

/**
 * Removes expired secrets
 * @param {Array<Object>} secrets - A collection of secrets
 * @returns {Array<Object>}
 */
function removeExpiredSecrects(secrets) {
    // Logger.info(secret); /** @todo Remove */
    const currentTime = Date.now(); // get current date
    // remove expired secrets
    _.remove(secrets, value => {
        return currentTime >= value.expires;
    });
    return secrets;
}

exports = module.exports = {
    getSecret,
    setSecret,
    secretify,
    removeSecret
};