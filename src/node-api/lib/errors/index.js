/**
 * Errors
 * @module lib/errors
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

// Module dependencies
const ConflictError = require('./conflict.error');
const NotFoundError = require('./not-found.error');
const ValidationError = require('./validation.error');
const UnavailableError = require('./unavailable.error');
const UnauthorizedError = require('./unauthorized.error');
const UnauthenticatedError = require('./unauthenticated.error');

module.exports = {
    ConflictError,
    NotFoundError,
    ValidationError,
    UnavailableError,
    UnauthorizedError,
    UnauthenticatedError
};