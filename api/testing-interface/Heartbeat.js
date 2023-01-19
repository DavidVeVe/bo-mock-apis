const SUCCESS_POST_TEST_SESSIONS = require('./Config').TEST_SESSION.SUCCESS_POST_SESSION_IDS;
const SUCCESS_POST_TASK_IDS = require('./Config').TASK_ID.SUCCESS_POST_TASK_IDS;

const POST_MESSAGES = {
    SUCCESS: 'HEARTBEAT.SAVE.SUCCESS',
    FAIL: 'HEARTBEAT.SAVE.FAIL'
};

class Heartbeat {
    /**
     * @api {post} api/v1/testSessions/:testSessionId/tasks/:taskId/heartbeat Heartbeat
     * @apiName Heartbeat
     * @apiGroup Heartbeat
     *
     * @apiParam {Integer} lastSubmission unixtime seconds
     * @apiParam {Integer} taskId where the submission happened.
     *
     * @apiSuccess {String} messageKey HEARTBEAT.SAVE.SUCCESS
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *      'testId': (int 1738)
     *	    'messageKey': (string "HEARTBEAT.SAVE.SUCCESS")
     *      }
     *
     */

    postMethod(req, res) {

        if (SUCCESS_POST_TEST_SESSIONS.includes(+req.params.sessionId) && SUCCESS_POST_TASK_IDS.includes(+req.params.taskId)) {
            res.json({
                'testId': +req.params.sessionId,
                'messageKey': POST_MESSAGES.SUCCESS
            });
        } else {
            res.status(403).json({
                'messageKey': POST_MESSAGES.FAIL
            });
        }
    }
}

module.exports = Heartbeat;
