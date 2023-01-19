/**
 * Created by ulloaen on 04/01/2019
 */

const AbstractFilePath = require('./AbstractFilePath');
const RESPONSE_CONFIG = require('./Config').FILES;

function Files() {
    const POST_FILES_MESSAGES = {
            SUCCESS: 'FILE.UPDATE.SUCCESS',
            FAIL: 'FILE.UPDATE.FAIL'
        },
        DELETE_FILES_MESSAGES = {
            SUCCESS: 'FILE.DELETE.SUCCESS',
            FAIL: 'FILE.DELETE.FAIL',
            FORBIDDEN: 'FILE.DELETE.FORBIDDEN'
        };

    this.getMethod = function (req, res) {
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'files/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}files-${req.params.taskId}-get.json`);


        if (fileName) {
            res.sendFile(fileName);
        } else {
            res.sendStatus(400);
        }
    };

    this.getByFileName = function (req, res) {
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'files/testFile/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}${req.params.filename}`);

        if (fileName) {

            const fileContent = AbstractFilePath.readFileSync(fileName);
            res.writeHead(200, {
                'Content-Type': 'application/octet-stream',
                'Content-disposition': `attachment; filename=${req.params.filename}`
            });
            res.write(fileContent);
            res.end();

        } else {
            res.sendStatus(400);
        }
    };

    this.postByFileName = function (req, res) {
        let fileName = req.params.filename;


        if (RESPONSE_CONFIG.SUCCESS_POST_FILE_NAME.includes(fileName)) {
            res.json({
                'messageKey': POST_FILES_MESSAGES.SUCCESS
            });
        } else {
            res.json({
                'messageKey': POST_FILES_MESSAGES.FAIL
            });
        }

    };

    this.deleteByFileName = function (req, res) {
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'files/testFile/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}${req.params.filename}`);


        if (fileName) { //If file exists means that is one of the default ones therefore is forbidden to erase it.
            res.json({
                'messageKey': DELETE_FILES_MESSAGES.FORBIDDEN
            });
        } else if (RESPONSE_CONFIG.SUCCESS_DELETE_FILE_NAME.includes(req.params.filename)) {
            res.json({
                'messageKey': DELETE_FILES_MESSAGES.SUCCESS
            });
        } else {
            res.json({
                'messageKey': DELETE_FILES_MESSAGES.FAIL
            });
        }


    };
}


module.exports = Files;