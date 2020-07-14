/**
 * ConflictError Module
 * @module lib/errors/conflict
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

const CustomError = require('./error');
const errMessages = require('../../config/error-messages.config');

class ConflictError extends CustomError {
    constructor(options, message = null) {
        if (message === null) {
            message = options.message || errMessages.entryConflic;
        }
        let code = options.code || 422;
        super(message, code);
        this.name = 'ConflictError';
    }
}
module.exports = ConflictError;