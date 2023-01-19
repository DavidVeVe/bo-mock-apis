/**
 * Created by ulloaen on 04/01/2019
 */

const AbstractFilePath = require('./AbstractFilePath');
const SUCCESS_POST_TEST_SESSIONS = require('./Config').TEST_SESSION.SUCCESS_POST_SESSION_IDS;
const EXPIRED_POST_SESSION_IDS = require('./Config').TEST_SESSION.EXPIRED_POST_SESSION_IDS;

const POST_MESSAGES = {
    SUCCESS: 'SESSION.UPDATE.SUCCESS',
    FAIL: 'SESSION.UPDATE.FAIL',
    EXPIRED: 'SESSION.UPDATE.FAIL.LINK.EXPIRED'
};

class TestSessions {

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

    postMethod(req, res) {

        if (SUCCESS_POST_TEST_SESSIONS.includes(+req.params.sessionId)) {
            res.json({
                'messageKey': POST_MESSAGES.SUCCESS
            });
        } else if(EXPIRED_POST_SESSION_IDS.includes(+req.params.sessionId)) {
            res.status(403).json({
                'messageKey': POST_MESSAGES.EXPIRED
            });
        } else {
            res.sendStatus(400);
        }
    }

    /**
     * @api {get} /api/v1/testSessions/{testSessionId} TestSession
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
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId)),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}testSession-get.json`);

        if (fileName) {
            res.sendFile(fileName);
        } else {
            res.sendStatus(400);
        }
    }
}


module.exports = TestSessions;