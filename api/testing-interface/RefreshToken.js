/**
 * Created by ulloaen on 31/12/2018
 */


/**
 * @api {get} /api/v1/refreshtoken Refresh token
 * @apiName Refresh Token
 * @apiGroup Token
 * @apiHeader {String} X-Auth-Token Old token present in header
 *
 * @apiSuccess {token} token New token for the user session
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *     "token": "someRandomNewToken",
 *		}
 *
 */
class RefreshToken {
    constructor() {
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySW5mbyI6MjcwLCJleHAiOjE1NDU5NTA5OTMsImlhdCI6MTU0NTk1MDM5M30.yGOBMJfUItnlcoDSe6_WODu17AfZt6zCPje5Zytl3RQ';
    }


    postMethod(req, res){
        res.json({'token': this.token});
    }
}

module.exports = RefreshToken;