/**
 * Created by ulloaen on 20/06/2019
 */
class LogOut {
    get(req, res) {
        res.header('Access-Control-Expose-Headers', 'Content-Type');
        res.json({'messageKey': 'LOGOUT.SUCCESSFUL'});
    }
}

module.exports = LogOut;