/**
 * app.config.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * All rights reserved
 */
'use strict';

const credentials = require('./private/credentials');
const os = require('os');

const jwtOptions = {
    cookies: false
};
const config = {
    jwtOptions,
    iss: 'covid-admin-api',
    aud: 'covid-admin-api',
    appID: 1,
    maxSessions: 5,
    tokenExpires: 1000 * 60 * 60 * 24 * 30,
    authTokenExpire: 1000 * 60 * 60 * 24 * 30,
    ssoTokenExpires: 1000 * 60 * 60 * 24 * 30,
    cookieExpires: 1000 * 60 * 60 * 24 * 30,
    ssoCookieExpires: 1000 * 60 * 60 * 24 * 30,
    ssoCookieName: 'COVIDADMINDEVSSO',
    cookieSecret: 'Ddt9677933934',
    corsWhiteList: [
        'http://localhost:8085',
        'http://localhost:8081'
    ],
    apiName: 'covid-admin-api',
    host: os.hostname(),
    token: credentials.token,

    log: true,
    ssoSecret: 'dT$T^#^%^#$Tgdgdg',
    

    ...credentials
}


module.exports = config;