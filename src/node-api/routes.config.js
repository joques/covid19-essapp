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
            authorization:false,
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
            path: '/advertisements',
            model: 'advertisement.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/branches',
            model: 'branch.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/brands',
            model: 'brand.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/carts',
            model: 'cart.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/components',
            model: 'component.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/configs',
            model: 'config.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/coupons',
            model: 'coupon.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/currencies',
            model: 'currency.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/exchangeRates',
            model: 'exchangeRate.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/favourites',
            model: 'favourite.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/invoices',
            model: 'invoice.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/leadTimes',
            model: 'leadTime.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/mailingLists',
            model: 'mailingList.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/merchants',
            model: 'merchant.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/merchantCategories',
            model: 'merchantCategory.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/metrics',
            model: 'metric.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/metricRatios',
            model: 'metricRatio.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/orders',
            model: 'order.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/paymentOptions',
            model: 'paymentOption.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/products',
            model: 'product.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/productCategories',
            model: 'productCategory.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/returnPolicies',
            model: 'returnPolicy.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/reviews',
            model: 'review.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/services',
            model: 'service.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            // authentication: true,
            // authorization:
            // {
            //     permissionID: 'service',
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
            path: '/serviceCategories',
            model: 'serviceCategory.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/shippingCompanies',
            model: 'shippingCompany.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/shippingInsurances',
            model: 'shippingInsurance.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/shippingOptions',
            model: 'shippingOption.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/sizes',
            model: 'size.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/stocks',
            model: 'stock.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/tickets',
            model: 'ticket.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/tracking',
            model: 'track.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/measures',
            model: 'measure.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/systems',
            model: 'system.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/productSubCategories',
            model: 'productSubCategory.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/schedules',
            model: 'schedule.model',
            methods: [_READ, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/serviceSubCategories',
            model: 'serviceSubCategory.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/countries',
            model: 'country.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/cities',
            model: 'city.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/shippingInsurances',
            model: 'shippingInsurance.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/bankAccounts',
            model: 'bankAccount.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/merchantPreferences',
            model: 'merchantPreference.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/terms',
            model: 'term.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/termTypes',
            model: 'termType.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/trackingStatus',
            model: 'trackingStatus.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/bookings',
            model: 'booking.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
            path: '/genders',
            model: 'gender.model',
            methods: [_CREATE, _READ, _DELETE, _PATCH],
            authentication: false,
            authorization:false,
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
        {
            path: '/configs',
            handler: 'config.controller'
        },
    ]
}