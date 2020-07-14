/**
 * MongoDB Error Handler
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * All rights reserved
 */
require('../config/http-status');
const codes = require('../config/status-codes');

/**
 * Handlers errors raised by mongo db
 * @param {object} error - MognoError object.
 */
const mongoDBErrorHandler = (error) => {
    status = 500;
    feedback = {};
    switch (error.code) {
        case 11000:
            status = _CONFLICT;
            feedback = codes.duplicate;
            break;
        default:
            feedback = codes.dbUnknown;
    }

    return [status, feedback];
}
module.exports = {
    resolve: function(error) {
        return mongoDBErrorHandler(error);
    }
}