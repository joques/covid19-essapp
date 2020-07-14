/**
 * API Index
 * @author Erastus Nathingo <contact@erassy.com>
 * @copyright erassy.com
 * @license MIT
 */

// module dependencies
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const Logger = require('./lib/logger');
const config = require('./app.config');
const bodyParser = require('body-parser');
const attach = require('./lib/api.attach');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const errorHandler = require('./config/error-handler');
const corsOptions = require('./custom-lib/cors.utility');
const RouteControllers = require('./core/api.router-helper');
require('colors');
const scheduledJobs = require('./custom-lib/schedules.utilities');


Logger.info('Initializing app');


const app = express();
const port = process.argv[3] || process.env.PORT // set the port

app.use(cors(corsOptions));
app.use(cookieParser(config.cookieSecret)); // signed cookie
app.use(compression())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(morgan('dev'))
    .use(methodOverride())
    .use(bodyParser.json())
    .use(attach)
    .use((req, res, next) => {
        // make service unavailable if database is not connected.
        if (false) {
            res.setHeader("Retry-After", 0.5);
            next(new res.$errors.UnavailableError(res.$codes.unavailable));
        } else {
            next();
        }
    });

// })
RouteControllers.initialize(app);
app.use(errorHandler)
app.listen(port, () => {
    Logger.log(`Running ${config.apiName} ON http://${config.host}:${port}`.cyan);
});
