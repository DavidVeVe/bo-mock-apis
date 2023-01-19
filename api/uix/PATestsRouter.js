let AbstractRouter;
let AbstractFilePath;
let AccountHelper;
let Helpers;
let chalk;
let log;

AbstractRouter = require('./AbstractRouter');

class PATestsRouter extends AbstractRouter {
    /**
     *
     * @param dataPath {String} Path to look up under data/uix folder
     * @param prefixName {String} File prefix that all .json files will contain under this folder
     */
    constructor(dataPath, prefixName) {
        super(dataPath, prefixName);
        AbstractFilePath = require('./AbstractFilePath');
        AccountHelper = require('./AccountHelper');
        Helpers = require('./Helpers');
        chalk = require('chalk');
        log = console.log;
    }

    post() {
        let
            filePath = this.filePath,
            filterParams = null,
            prefix = this.postPrefix,
            htfFiles = this.HTF_FEEDBACK_FILES;

        return function (req, res) {
            res.header('Access-Control-Expose-Headers', 'Content-Type');
            let token = req.header('X-Auth-Token');

            if (AccountHelper.doesTokenExist(token) || htfFiles.includes(prefix)) {
                let fileName = AbstractFilePath.fileExistsSync(`${filePath}${prefix}-${token}.json`)
                    || AbstractFilePath.fileExistsSync(`${filePath}${prefix}.json`);

                if (fileName) {
                    if (!req.query && !req.body) {
                        res.sendFile(fileName);
                    }

                    if (req.body.paJobRoleId === 42) {
                        setTimeout(() => {
                            res.sendStatus(409);
                        }, 2000);
                        return;
                    }

                    let fileContent = JSON.parse(AbstractFilePath.readFileSync(fileName));
                    let parsedData;

                    // Handle Filtering
                    parsedData = Helpers.filterElements(fileContent, req.query, req.body, prefix, req.path, token, req.originalUrl);

                    //Handle Sorting
                    parsedData = Helpers.sortBy(parsedData, req.query, req.body, prefix);

                    //Handle Limit and Offset
                    parsedData = Helpers.getLimitAndOffset(parsedData, req.query, req.body, prefix);

                    parsedData = Helpers.filterFields(parsedData, req.body, prefix);

                    parsedData = Helpers.processRequest(parsedData, req.params, req.body, prefix, token, req.files);

                    res.json(parsedData);
                } else {
                    log(chalk.yellowBright(`No such data for ${req.method} ${req.originalUrl}`));
                    res.sendStatus(404);
                }

            } else {
                res.sendStatus(401);
            }
        };
    }
}

module.exports = PATestsRouter;
