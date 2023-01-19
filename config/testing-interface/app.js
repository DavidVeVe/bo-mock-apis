/**
 * Created by ulloaen on 31/12/2018
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

let routes = require('./router.js');

app.use(routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    log(chalk.yellow('Method', req.method, ' is not implemented for', req.originalUrl));
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;