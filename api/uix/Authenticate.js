/**
 * Created by ulloaen on 31/12/2018
 */
const AbstractFilePath = require('./AbstractFilePath');
const AccountHelper = require('./AccountHelper');
const helpers = require("./Helpers");

class Authenticate {

    post(req, res) {
        let email = req.body.userName,
            password = req.body.password;
        let filePath = AbstractFilePath.getFilePath('authenticate/');

        res.header('Access-Control-Expose-Headers', 'Content-Type');

        if (AccountHelper.isUserValid(email, password)) {
            let tokenID = AccountHelper.getTokenFile(email);

            if (tokenID) {
                res.json({
                    token: tokenID,
                    isFirstLogin: false,
                });
                helpers.resetData("dataCollectionHistory-post");
                helpers.resetData("alerts-post");
                helpers.resetData("ListDataSources-post");
            } else {
                res.sendStatus(404);
            }
        } else {

            res.status(401).json({'messageKey': 'INVALID.CREDENTIALS', 'showCaptcha': true});
        }
    }
}

module.exports = Authenticate;

