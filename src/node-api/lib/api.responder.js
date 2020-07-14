/**
 * API Responder
 * @module lib/responder
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

const Logger = require('./logger');
/**
 * API responder for JSON format response.
 * the api will return no content to the client.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Object} [feed={}] - JSON feedback
 * @param {number} [status=200] - HTTP status code when there is content.
 * @param {number} [emptyStatus=201] - HTTP status when content is to be supressed.
 */
const json = function(req, res, feed = {}, status = 200, emptyStatus = 201) {
    Logger.info('JSON Feedback'); /** @todo Remove */
    if (req.method === 'GET' && feed === null) {
        res.status(status).json([]).end();
    } else if ((req.method === 'PATCH' || req.method === 'DELETE' || req.method === 'UPDATE') && feed === null) {
        res.status(404).json({
            code: 404,
            message: 'Item you are trying to modify or delete for could not be found.'
        }).end();
    } else if (req.query && req.query.supress === 'true') {
        res.status(emptyStatus).end();
    } else {
        res.status(status).json(feed).end();
    }
}

module.exports = {
    json: json
};