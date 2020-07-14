/**
 * CRUD constants
 * @module config/crud
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

/**
 * @global
 * @constant {string}
 * @default
 */
_CREATE = 'create';
/**
 * @global
 * @constant {string}
 * @default
 */
_READ = 'read';
/**
 * @global
 * @constant {string}
 * @default
 */
_UPDATE = 'update';
/**
 * @global
 * @constant {string}
 * @default
 */
_DELETE = 'delete';
/**
 * @global
 * @constant {string}
 * @default
 */
_PATCH = 'patch';
/**
 * @global
 * @constant {Array.<string>}
 * @default
 */
_CRUD = [_CREATE, _READ, _UPDATE, _DELETE, _PATCH];

/**
 * @global
 * @constant {Object.<string,string>}
 * @default
 */
$CRUD = {
    "GET": _READ,
    "POST": _CREATE,
    "PUT": _UPDATE,
    "DELETE": _DELETE,
    "PATCH": _PATCH
};

module.exports = $CRUD;