/**
 * Created by ulloaen on 19/06/2019
 */

class SsoCheck {
    post(req, res) {
        res.header('Access-Control-Expose-Headers', 'Content-Type');
        if (~req.body.username.indexOf('@saml.com')) {
            //TODO Implement this endpoint to return key and login
            res.json({'messageKey': 'USER.LOGIN.WITH.SSO', 'redirectURL': 'http://localhost:9001/ssoLogin/'});
        } else {
            res.json({'messageKey': 'USER.LOGIN.WITHOUT.SSO', 'redirectURL': null});
        }
    }
}

module.exports = SsoCheck;
