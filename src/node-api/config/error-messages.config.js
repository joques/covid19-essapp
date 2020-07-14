/**
 * ErrorMessages Module
 * @module 'config/error-messages'
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

// Default error messages for logging and error handling
/**
 * @type {Object.<string, string>}
 * @default
 */
const errorMessages = {
    validation: "Action could not be completed due to validation.",
    serverError: "Something unexpected happened, please contact admininstrator.",
    unauthorized: "User is not authorized to perform this action.",
    unauthentication: "User is not authenticated, no authentication provided or invalid credentials",
    noPermissions: "No permissions has been set for this user or session.",
    missingPathPerm: "No permissions has been set for this path for this user.",
    notFound: "The requested resource could not be found.",
    noAuthorizationFound: "No authorization record found for this user",
    noPermissionsFound: "Authorization exist but no permissions have been defined for this user.",
    entryConflict: "This entry conflicts with an existing entry, possible duplication.",
    validationError: "This request failed validation, please consult documentation and retry.",
    unavailable: "This service is currently unvailable, please try again later."

}

module.exports = errorMessages;