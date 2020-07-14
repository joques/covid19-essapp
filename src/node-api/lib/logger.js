
const config = require('../app.config');

class Logger {

    static trace(data) {
        if (config.log) {
            console.info(data);
        }
    }
    static fatal(data) {

        if (config.log) {
            console.trace(data);
        }
    }

    static log(data) {

        if (config.log) {
            console.log(data);
        }
    }

    static warn(data) {

        if (config.log) {
            console.warn(data);
        }
    }

    static info(data) {

        if (config.log) {
            console.info(data);
        }
    }

    static error(data) {

        if (config.log) {
            console.error(data);
        }
    }


}
module.exports = Logger;