/**
 * HTTP STATUS CODES CONSTANTS
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * All rights reserved
 */

/** HTTP status codes constants to be used for the api responses */
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_OK = 200;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_CREATED = 201;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_ACCEPTED = 202;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_NOT_CONTENT = 204;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_BAD_REQUEST = 400;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_UNAUTHORIZED = 401;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_PAYMENT_REQUIRED = 402;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_FORBIDDEN = 403;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_NOT_FOUND = 404;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_NOT_ACCEPTABLE = 406;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_REQUEST_TIMEOUT = 408;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_CONFLICT = 409;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_UNSUPPORTED_MEDIA_TYPE = 415;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_RANGE_NOT_SATISFIABLE = 416;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_UNPROCESSABLE_ENTITY = 422;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_LOCKED = 423;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_FAILED_DEPENDANCY = 424;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_INTERNAL_SERVER_ERROR = 500;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_NOT_IMPLEMENTED = 501;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_BAD_GATEWAY = 502;
/**
 * @type {number}
 * @constant
 * @default
 * @global
 */
_SERVICE_UNAVAILABLE = 503;

/** HTTP status codes constants object */
const _CODES = {
    _OK,
    _CREATED,
    _ACCEPTED,
    _NOT_CONTENT,
    _BAD_REQUEST,
    _UNAUTHORIZED,
    _PAYMENT_REQUIRED,
    _FORBIDDEN,
    _NOT_FOUND,
    _NOT_ACCEPTABLE,
    _REQUEST_TIMEOUT,
    _CONFLICT,
    _UNSUPPORTED_MEDIA_TYPE,
    _RANGE_NOT_SATISFIABLE,
    _UNPROCESSABLE_ENTITY,
    _LOCKED,
    _FAILED_DEPENDANCY,
    _INTERNAL_SERVER_ERROR,
    _NOT_IMPLEMENTED,
    _BAD_GATEWAY,
    _SERVICE_UNAVAILABLE
};
module.exports = _CODES;