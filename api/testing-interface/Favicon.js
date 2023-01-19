const GET_MESSAGES = {
    SUCCESS: 'FAVICON.SUCCESS'
};

class Favicon {
    /**
     * @api {get} /favicon.ico Favicon
     * @apiName Favicon
     * @apiGroup Favicon
     *
     *
     * @apiSuccess {String} messageKey FAVICON.SUCCESS
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *	    'messageKey': (string "FAVICON.SUCCESS")
     *      }
     *
     */
    getMethod(req, res) {
        res.json({
            'messageKey': GET_MESSAGES.SUCCESS
        });
    }
}

module.exports = Favicon;
