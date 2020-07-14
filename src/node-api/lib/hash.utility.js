/**
 * hash.utility.js
 *
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */
const bcrypt = require('bcryptjs');
const Hash = {
    saltRounds: 12,
    encrypt: function (plain) {
        return bcrypt.hash(plain, this.saltRounds);
    },
    compare: function (plain, password) {
        return bcrypt.compare(plain, password);
    }
}
module.exports = Hash;