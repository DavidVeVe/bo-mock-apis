/**
 * Created by ulloaen on 31/12/2018
 */
const AbstractFilePath = require('./AbstractFilePath');
const ALREADY_ACTIVE_KEY = 'otherSessionActive';

class Authenticate {

    /**
     * @api {post} /api/v1/authenticate Request User information
     * @apiName Authenticate
     * @apiGroup Authentication
     *
     * @apiParam {String} key Key Requested for the session.
     * @apiParam {Boolean} terminate  *optional*, to terminate another session
     *
     * @apiSuccess {String} token Token for the user session
     * @apiSuccess {Integer} testSessionId  ID for the test session
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *     "token": "sometoken",
     *     "testSessionId": (integer)
     *		}
     *
     * @apiError WrongKey Key was incorrect
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 401 Invalid
     *     {
     *     }
     */
    postMethod(req, res) {
        let filePath = AbstractFilePath.getFilePath('authenticate/');

        res.header('Access-Control-Expose-Headers', 'Content-Type');

        if (req.body.key) {
            let testSessionId = req.body.key,
                fileName = AbstractFilePath.fileExistsSync(`${filePath}${testSessionId}.json`);

            if (ALREADY_ACTIVE_KEY === testSessionId) {
                if (req.body.terminate) {
                    res.sendFile(fileName);
                } else {
                    res.status(401).json({
                        'isOtherSession': true
                    });
                }
            } else if (testSessionId && fileName) {
                res.sendFile(fileName);
            } else {
                res.sendStatus(401);
            }
        } else {
            res.sendStatus(400);
        }
    }
}

module.exports = Authenticate;

