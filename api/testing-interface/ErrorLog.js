
class ErrorLog {


    /**
     * @api {post} api/v1/errorLog
     * @apiName errorLog
     * @apiGroup errorLog
     *
     * @apiParam {String} errorType
     * @apiParam {String} description
     * @apiParam {String} callStack
     * @apiParam {String} userAgent
     * @apiParam {String} timezone
     * @apiParam {String} browserUrl
     * @apiParam {Number} responseErrorCode
     * @apiParam {String} responseErrorMessage
     * @apiParam {String} responseErrorEndpoint
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *
     */

    postMethod(req, res) {
        res.sendStatus(200);
    }
}


module.exports = ErrorLog;