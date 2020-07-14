/**
 * routes.config.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */
const access = require('./config/access');
require('./config/crud');
module.exports = {
    routes: [
        {
            path: '/users',
            model: 'user.model',
            methods: [_READ, _PATCH],
            authentication: false,
            authorization: false,
            // authentication: true,
            // authorization:
            // {
            //     permissionID: 'track',
            //     permissions: {
            //         read: {
            //             owner: true,
            //             admin: true,
            //             operator: true
            //         },
            //         patch: {
            //             owner: true,
            //             admin: true,
            //             operator: true,
            //             service: true
            //         }
            //     }
            // }
        },
        {
            path: '/authentications',
            model: 'authentication.model',
            methods: [_READ, _PATCH],
            authentication: true,
            authorization:
            {
                permissionID: 'authentication',
                permissions: {
                    read: {
                        owner: true,
                        admin: true,
                        operator: true
                    },
                    patch: {
                        owner: true,
                        admin: true,
                        operator: true,
                        service: true
                    }
                }
            }
        },
        {
            path: '/authorizations',
            model: 'authorization.model',
            methods: [_READ, _DELETE, _PATCH],
            authorization: false
        },



        {
            path: '/statistics',
            model: 'statistic.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization: false,
            // authentication: true,
            // authorization:
            // {
            //     permissionID: 'track',
            //     permissions: {
            //         read: {
            //             owner: true,
            //             admin: true,
            //             operator: true
            //         },
            //         patch: {
            //             owner: true,
            //             admin: true,
            //             operator: true,
            //             service: true
            //         }
            //     }
            // }
        },
        {
            path: '/regions',
            model: 'region.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization: false,
            // authentication: true,
            // authorization:
            // {
            //     permissionID: 'track',
            //     permissions: {
            //         read: {
            //             owner: true,
            //             admin: true,
            //             operator: true
            //         },
            //         patch: {
            //             owner: true,
            //             admin: true,
            //             operator: true,
            //             service: true
            //         }
            //     }
            // }
        },
        {
            path: '/news',
            model: 'news.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization: false,
            // authentication: true,
            // authorization:
            // {
            //     permissionID: 'track',
            //     permissions: {
            //         read: {
            //             owner: true,
            //             admin: true,
            //             operator: true
            //         },
            //         patch: {
            //             owner: true,
            //             admin: true,
            //             operator: true,
            //             service: true
            //         }
            //     }
            // }
        },
        {
            path: '/authentication',
            handler: 'authentication.controller'
        },
        {
            path: '/users',
            handler: 'user.controller'
        },
    ]
}