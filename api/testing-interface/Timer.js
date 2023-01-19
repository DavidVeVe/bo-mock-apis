/**
 * Created by ulloaen on 04/01/2019
 */

const AbstractFilePath = require('./AbstractFilePath');

class Timer {


    /**
     * @api {get} api/v1/testSessions/:testSessionId/snapshots Snapshots
     * @apiName Snapshots
     * @apiGroup Snapshots
     *
     * @apiParam {Integer} testSessionId ID for the test session
     * @apiParam {String} type  either "ongoing" or "final"
     *
     * @apiSuccess {Integer} number Any valid number
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *	    "number": 0
     *      }
     *
     */

    getMethod(req, res) {
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'timer/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}timer-${req.params.taskId}-get.json`);


        if (fileName) {
            res.sendFile(fileName);
        } else {
            res.sendStatus(400);
        }
    }
}


module.exports = Timer;