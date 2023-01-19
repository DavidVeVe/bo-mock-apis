/**
 * Created by ulloaen on 04/01/2019
 */

const AbstractFilePath = require('./AbstractFilePath');
const SUCCESS_POST_TASK_IDS = require('./Config').TASK_ID.SUCCESS_POST_TASK_IDS;
const ACTIVE_TASK_IDS = require('./Config').ACTIVE_TASK_IDS;
const SESSIONS_USING_TASK_SWITCHING = require('./Config').SESSIONS_USING_TASK_SWITCHING;

function TaskId() {
    const MESSAGES = {
        SUCCESS: 'TASK.UPDATE.SUCCESS',
        FAIL: 'TASK.UPDATE.FAIL',
    };
    /**
     * @api {post} api/v1/testSessions/:testSessionId/snapshots Snapshots
     * @apiName Snapshots
     * @apiGroup Snapshots
     *
     * @apiParam {Integer} testSessionId ID for the test session
     * @apiParam {Blob} image.
     * @apiParam {String} type  either "ongoing" or "final"
     *
     * @apiSuccess {String} messageKey Either SNAPSHOT.SAVE.SUCCESS or SNAPSHOT.SAVE.FAIL
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *	    'messageKey': (string "SNAPSHOT.SAVE.SUCCESS")
     *      }
     *
     */

    this.postMethod = function (req, res) {
        if(SESSIONS_USING_TASK_SWITCHING.includes(+req.params.sessionId)) {
            ACTIVE_TASK_IDS.CURRENT_ACTIVE[req.params.sessionId] = +req.params.taskId;
        }

        if (SUCCESS_POST_TASK_IDS.includes(+req.params.taskId)) {
            res.json({
                'messageKey': MESSAGES.SUCCESS
            });
        } else {
            res.json({
                'messageKey': MESSAGES.FAIL
            });
        }
    };

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

    this.getMethod = function (req, res) {
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'taskId/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}taskId-${req.params.taskId}-get.json`);

        if (fileName) {
            res.sendFile(fileName);
        } else {
            res.sendStatus(400);
        }
    };
}


module.exports = TaskId;