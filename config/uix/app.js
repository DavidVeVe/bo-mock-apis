/**
 * Created by ulloaen on 13/06/2019
 */

'use strict';

const
    express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    chalk = require('chalk'),
    // eslint-disable-next-line no-console
    log = console.log;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

const routes = require('./router.js');
const overviewRoutes = require('./routes/overviewRoutes.js');
const paAdminRoutes = require('./routes/paAdminRoutes.js');
const administrationRoutes = require('./routes/administrationRoutes.js');
const DCHRoutes = require('./routes/dataCollectionHistoryRoutes');
const analyzeACERoutes = require('./routes/analyzeACERoutes.js');
const dataSources = require('./routes/configureDataSources');
const auth = require('./routes/auth');
const autoDiscovery = require('./routes/autodiscoveryRoutes');
const userPreferences = require('./routes/userPreferencesRoutes');
const loginExclusions = require('./routes/loginExclusionsRoutes');
const analysis = require('./routes/analysisRoutes');
const benchmark = require('./routes/benchmark');
const scorecard = require('./routes/scorecard');
const tld = require('./routes/tld');
const activeAlerts = require('./routes/activeAlerts');
const saml = require('./routes/saml');

app.use(routes);
app.use(benchmark);
app.use(overviewRoutes);
app.use(paAdminRoutes);
app.use(administrationRoutes);
app.use(DCHRoutes);
app.use(analyzeACERoutes);
app.use(dataSources);
app.use(auth);
app.use(autoDiscovery);
app.use(userPreferences);
app.use(loginExclusions);
app.use(analysis);
app.use(scorecard);
app.use(activeAlerts);
app.use(tld);
app.use(saml);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    log(chalk.yellow('Method', req.method, ' is not implemented for', req.originalUrl));
    res.sendStatus(404);
    next();
});

module.exports = app;
