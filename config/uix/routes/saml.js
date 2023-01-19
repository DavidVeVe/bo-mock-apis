/**
 * Created by ulloaen on 13/04/2021
 */
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

router.route('/api/v1/ssoCheck')
    .post(requestHandler.ssoCheck.post);

router.route('/ssoLogin')
    .get(function (req, res) {
        res.cookie('JSESSIONID', '1234567890ABC');
        res.redirect(302, 'http://localhost:8080/');
    });

router.route('/saml/token')
    .get(function (req, res) {
        const rememberMe = req.query.rememberMe === 'true';
        const terminate = req.query.terminate === 'true';

        if (terminate  && rememberMe) {
            res.json({token: 'test', rememberMe: rememberMe, messageKey: 'GET.TOKEN.SUCCESS'});
        } else if(rememberMe){
            res.json({isOtherSession: true, message: 'USER.OTHER_SESSION'});
        } else {
            res.status(200).json({messageKey: 'ISSUER.NOT_FOUND'});
        }
    });

module.exports = router;
