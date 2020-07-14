/**
 * Database Module
 * @module lib/database
 * @author Erastus Nathingo <contact@erassy.com>
 * @license MIT
 */

// module dependencies
const Logger = require('./logger');
const mongoose = require('mongoose');
const config = require('../app.config.js');
require('colors');

// initialize
mongoose.Promise = Promise;
mongoose.connect(config.mongoUrl, {
    autoReconnect: true,
    useCreateIndex: true,
    socketTimeoutMS: 0,
    connectTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useFindAndModify:false
}).catch(error => {
    Logger.error('Mongoose connection failed...'); /** @todo Remove */
    Logger.warn(error);
});

// database connection check
mongoose.connection.on('disconnected', () => {
    global.connected = false;
    Logger.error('Mongoose failed to connect or disconnect, retry in progress'); /** @todo Remove */
}).on('reconnected', () => {
    global.connected = true;
    Logger.trace('Database reconnected...'.green); /** @todo Remove */
}).on('connected', () => {
    global.connected = true;
    Logger.trace('Database connected...'.cyan); /** @todo Remove */
}).on('error', () => {
    Logger.error('Database error...'); /** @todo Remove */
    //Logger.warn(error);
});
module.exports = mongoose;