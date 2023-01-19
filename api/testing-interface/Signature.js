/**
 * Created by ulloaen on 04/01/2019
 */

const MESSAGES = {
    SUCCESS: 'SIGNATURE.SAVE.SUCCESS',
    FAIL: 'SIGNATURE.SAVE.FAIL'
};
function Signature() {

    this.postMethod = function (req, res) {
        if(req.body.fingerprint){
            res.json({
                'messageKey': MESSAGES.SUCCESS
            });
        } else{
            res.json({
                'messageKey': MESSAGES.FAIL
            });
        }
    };
}

module.exports = Signature;