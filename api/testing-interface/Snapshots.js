/**
 * Created by ulloaen on 03/01/2019
 */

const SUCCESS_POST_SESSION_IDS = require('./Config').SNAPSHOTS.SUCCESS_POST_SESSION_IDS;

function Snapshots() {
    const POST_MESSAGES = {
        SUCCESS: 'FILE.UPDATE.SUCCESS',
        FAIL: 'FILE.UPDATE.FAIL'
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

    this.postMethod = function (req, res, next) {
        if (SUCCESS_POST_SESSION_IDS.includes(+req.params.sessionId)) {
            if (+req.params.sessionId === 7) {
	            res.setTimeout(5000, function () {
		            res.json({
			            'messageKey': POST_MESSAGES.SUCCESS
		            });
		            next();
	            });
            } else {
	            res.json({
		            'messageKey': POST_MESSAGES.SUCCESS
	            });
            }
        } else {
            res.json({
                'messageKey': POST_MESSAGES.FAIL
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
        res.sendStatus(200);
    };
}


module.exports = Snapshots;