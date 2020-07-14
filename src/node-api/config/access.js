/**
 * Access control constants
 * Defines the constants for setting and checking resource access permissions.
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * All rights reserved
 */
const access = {
    roles: {
        owner: 1,
        service: 2,
        org_admin: 4,
        dep_admin: 8,
        supervisor: 16,
        clerk: 32,
        finance: 64,
        client: 128
    },
    types: {
        owner: 1,
        service: 2,
        admin: 4,
        staff: 8,
        client: 16
    },
    permissions: {
        create: 1,
        read: 2,
        update: 4,
        delete: 8,
        patch: 16,
        createOwn: 32,
        readOwn: 64,
        updateOwn: 128,
        deleteOwn: 256,
        patchOwn: 512
    },
    control: {

    }
}
module.exports = access;
