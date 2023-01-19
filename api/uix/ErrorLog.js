/**
 * Created by ulloaen on 20/06/2019
 */
const chalk = require('chalk'),
    // eslint-disable-next-line no-console
    log = console.log;

class ErrorLog {
    post(req, res) {
        log(chalk.blue.bgYellow(JSON.stringify(req.body)));

        res.header('Access-Control-Expose-Headers', 'Content-Type');
        res.sendStatus(200);
    }
}

module.exports = ErrorLog;