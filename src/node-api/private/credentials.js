require('colors')
const environment = process.env.NODE_ENV || 'development'; // determine the environment
const PIP_GENERIC_TOKEN = process.env.PIP_GENERIC_TOKEN || ''; // generic token
const PIP_JWT_SECRET = process.env.PIP_JWT_SECRET || '600@46SBw2rHHH!888TF'; // generic token


const common = {
    jwtSecret: PIP_JWT_SECRET,
    cookieSecret: 'THESTOREDEVt9677933934',
    token: PIP_GENERIC_TOKEN
}
environment === 'development' ? console.log(`\nENV: ${environment.red}`) : console.log(`\nENV: ${environment.green}`)

const dev = Object.assign({}, common, {
    mongoUrl: `mongodb+srv://`
});


const prod = Object.assign({}, common, {
    mongoUrl: `mongodb://`
});

module.exports = environment === 'development' ? dev : prod;