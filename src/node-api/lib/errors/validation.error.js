/**
 * ValidationError
 * @module lib/errors/validation
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

const CustomError = require('./error');
const errMessages = require('../../config/error-messages.config');
class ValidationError extends CustomError {
    constructor(options, message = null) {
        if (message === null) {
            message = options.message || errMessages.validationError;
        }
        let code = options.code || 422;
        super(message, code);
        this.name = 'ValidationError';
    }
}
module.exports = ValidationError;