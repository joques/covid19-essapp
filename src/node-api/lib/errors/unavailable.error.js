/**
 * UnavailableError Module
 * @module lib/errors/conflict
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

const CustomError = require('./error');
const errMessages = require('../../config/error-messages.config');

class UnavailableError extends CustomError {
    constructor(options, message = null) {
        if (message === null) {
            message = options.message || errMessages.entryConflic;
        }
        let code = options.code || 1;
        super(message, code);
        this.name = 'UnavailableError';
    }
}
module.exports = UnavailableError;