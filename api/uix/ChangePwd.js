/**
 * Created by ulloaen on 08/10/2019
 */
class ChangePwd {
    post(req, res) {
        let id = req.body.id;
        res.header('Access-Control-Expose-Headers', 'Content-Type');
        if (id === 666) {
            res.status(403).json({
                'messageKey': '403.UNABLE_TO_ACCESS',
                'message': 'Feature cannot be used for SAML enable enterprise.'
            });
        } else {
            res.status(200).json({
                'messageKey': 'USER.CHANGEPASSWORD.SUCCESS'
            });

        }
    }
}

module.exports = ChangePwd;