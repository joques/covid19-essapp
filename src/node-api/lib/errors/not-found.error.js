/**
 * not-found.error.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * All rights reserved
 */
const CustomError = require('./error');
const errMessages = require('../../config/error-messages.config');
class NotFoundError extends CustomError {
    constructor(options, message = null) {
        if (message === null) {
            message = options.message || errMessages.unauthorized;
        }
        let code = options.code || 404;
        super(message, code);
        this.name = 'NotFoundError';
    }
}
module.exports = NotFoundError;