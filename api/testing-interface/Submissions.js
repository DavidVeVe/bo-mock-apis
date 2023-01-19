/**
 * Created by ulloaen on 04/01/2019
 */

const AbstractFilePath = require('./AbstractFilePath');
const LONG_RESPONSE_TIME_SESSIONS = require('./Config').LONG_RESPONSE_TIME_SESSIONS;

class Submissions {

    postMethod(req, res) {

        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'submissions/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}submissions-${req.params.taskId}-post.json`);

        if (fileName) {

            // Give more time in the response
            if (LONG_RESPONSE_TIME_SESSIONS.includes(parseInt(req.params.sessionId, 10))) {
                setTimeout(function(){
                    res.sendFile(fileName);
                }, 10000);
            } else {
                res.sendFile(fileName);
            }

        } else {
            res.sendStatus(400);
        }
    }


    getMethod(req, res){
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'submissions/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}submissions-${req.params.taskId}-get.json`);

        if (fileName) {
            res.sendFile(fileName);
        } else {
            res.sendStatus(400);
        }
    }

    getBySubmissionId(req, res){
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'submissions/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}submissionId-${req.params.submissionId}-get.json`);


        if (fileName) {
            res.sendFile(fileName);
        } else {
            res.sendStatus(400);
        }

    }
}


module.exports = Submissions;