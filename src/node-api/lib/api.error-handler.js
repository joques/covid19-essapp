/**
 * ErrorHandler Module
 * @module "lib/error-handler"
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

// module dependencies
require('../config/http-status');

const _ = require('lodash');
const config = require('../app.config');
const Logger = require('../lib/logger');
const mongoErrorHandler = require('./api.mongo-db-error-handler');
const errorMessages = require('../config/error-messages.config');

/**
 * Express error handler middleware for handling api errors based on the error raised by the application.
 * The API custom errors include a code which identifies the exact type of error raised.
 * Wrap the error in json, send it back and terminates the request.
 * @param {object} err - Error object
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {function} next - Express next function.
 */
function errorHandler(err, req, res, next) {
    let feedback = {};
    let status = 500; // default error status
    if (res.headerSent) {
        return next(err);
    }
    switch (err.name) {
        case 'ValidatorError':
        case 'ValidationError':
            feedback.code = err.code || 2;
            status = _UNPROCESSABLE_ENTITY;
            feedback.message = err.message ? err.message : errorMessages.validation;
            break;
        case 'MongoError':
            [status, feedback] = mongoErrorHandler.resolve(err);
            break;
        case 'ForbiddenError':
            feedback.code = err.code || 3;
            status = _FORBIDDEN;
            feedback.message = err.message ? err.message : errorMessages.forbidden;
            break;
        case 'UnauthenticatedError':
            feedback.code = err.code;
            status = _UNAUTHORIZED;
            feedback.message = err.message;
            break;
        case 'UnauthorizedError':
            feedback.code = err.code;
            status = _FORBIDDEN;
            feedback.message = err.message;
            break;
        case 'ConflictError':
            feedback.code = err.code;
            status = _CONFLICT
            feedback.message = err.message
            break;
        case 'UnavailableError':
            feedback.code = err.code;
            status = _SERVICE_UNAVAILABLE;
            feedback.message = err.message;
            break;
        default:
            feedback.code = 0;
            status = _INTERNAL_SERVER_ERROR;
            feedback.message = errorMessages.serverError;
            break;
    }
    Logger.warn(err);
    feedback.name = err.name || 'Unknown';
    res.status(status).json(feedback).end();
}

module.exports = errorHandler;