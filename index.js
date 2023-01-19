/* eslint-disable no-console */
/**
 * Created by ulloaen on 31/12/2018
 */

const
    http = require('http'),
    PROJECTS_CONFIG = require('./config/projects-config'),
    chalk = require('chalk'),
    log = console.log;

/**
 * Get port from environment and store in Express.
 */
const APPLICATION = process.env.APP || "uix";
if (!APPLICATION){
    throw Error('Application not specified');

} else if(!PROJECTS_CONFIG[APPLICATION]){
    throw Error(`Application ${APPLICATION} is not supported`);
}

const APP_CONFIG = PROJECTS_CONFIG[APPLICATION];

const app = require(APP_CONFIG.configPath);

let port = normalizePort(process.env.API_PORT || APP_CONFIG.defaultPort);

app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    log(chalk.green(`Mock API for ${APP_CONFIG.name} has started on http://localhost:${port}`));
}
