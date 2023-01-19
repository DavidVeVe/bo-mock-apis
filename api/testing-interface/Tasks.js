/**
 * Created by ulloaen on 04/01/2019
 */
const ACTIVE_TASK_IDS = require('./Config').ACTIVE_TASK_IDS;
const SESSIONS_USING_TASK_SWITCHING = require('./Config').SESSIONS_USING_TASK_SWITCHING;
const AbstractFilePath = require('./AbstractFilePath');

class Tasks{


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

    getMethod(req, res){
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'tasks/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}tasks-get.json`);

        let parsedData = null;

        if (fileName && SESSIONS_USING_TASK_SWITCHING.includes(+req.params.sessionId)) {
            let fileContent = JSON.parse(AbstractFilePath.readFileSync(fileName));
            parsedData = fileContent.map(e => {
                e.active = e.taskId === ACTIVE_TASK_IDS.CURRENT_ACTIVE[req.params.sessionId];
                return e;
            });

        }

        if (parsedData) {
            res.json(parsedData);
        } else if (fileName) {
            res.sendFile(fileName);
        } else {
            res.sendStatus(400);
        }
    }
}


module.exports = Tasks;