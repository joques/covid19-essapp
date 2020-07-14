/**
 * Status and error response codes
 * @module "config/status-codes"
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */


const statusCodes = {
    unavailable: {
        message: 'This service is currently unavailable, please try again later.',
        code: 1
    },
    notToken: {
        message: 'User could not be authenticated, no token provided.',
        code: 40
    },
    invalidToken: {
        message: 'User could not be authenticated, invalid token.',
        code: 41
    },
    unexpectedToken: {
        message: 'User could not be authenticated, unexpected token type.',
        code: 42
    },
    noAuthUser: {
        message: 'User could no be authorized, authorization for user does not exist.',
        code: 43
    },
    noPermissions: {
        message: 'User could not be authorized, permissions missing.',
        code: 44
    },
    notAuthorized: {
        message: 'User is not authorized to perform this action.',
        code: 45
    },
    wrongToken: {
        message: 'User could not be authorized, wrong token.',
        code: 46
    },
    duplicate: {
        message: 'Action could not be completed, due to database duplicate constraints.',
        code: 49
    },
    dbUnknown: {
        message: 'Action could not be completed, database failure.',
        code: 51
    },
    _55: {
        message: 'User could not be authorized, server error',
        code: 55
    },
    _56: {
        message: 'Action reversed, all necessary steps could not complete successfully.',
        code: 56
    },
    nullModify: {
        code: 60,
        message: 'The item you are trying to modify does not exist.'
    },
    refDoesNotExist: {
        code: 61,
        message: 'Validation failed, referenced item does not exist.'
    },
    missingField: {
        code: 62,
        message: 'Validation failed, missing field. Refer to documentation.'
    },
    enumError: {
        code: 63,
        message: 'Value(s) provided not allowed for this user.'
    },
    unacceptableValue: {
        code: 64,
        message: 'The value provided for the field in not acceptable.'
    },
    selfForbidden: {
        code: 65,
        message: 'This action is not allowed on own items.'
    },
    appNotAuthorized: {
        code: 66,
        message: 'The app is not authorized to perform this action.'
    },
    appDoesNotExist: {
        code: 67,
        message: 'The app does not exist.'
    },
    invalidCredentials: {
        code: 68,
        message: 'Invalid Credentials'
    },
    noSSOCookie: {
        code: 69,
        message: 'Missing or invalid SSO cookie.'
    },
    missingAppID: {
        code: 70,
        message: 'Missing application ID'
    },
    notAuthorizedOnThisDay: {
        code: 71,
        message: 'Client can only modify collection details on the first of the month'
    },
    accountLockout: {
        code: 72,
        message: 'User account has been locked. Too many login attempts'
    }
}
module.exports = statusCodes;