/**
 * Created by ulloaen on 19/06/2019
 */
const config = require('./Config');
const VALID_SESSIONS = config.VALID_SESSIONS;
const ACCOUNT_DETAILS = config.AVAILABLE_ACCOUNTS;

class AccountHelper {

    static getTokenFile(email) {
        return Object.keys(VALID_SESSIONS).filter((key) => VALID_SESSIONS[key].includes(email))[0];
    }

    static isUserValid(user, password) {
        if (!user || !password) {
            return false;
        }
        return ACCOUNT_DETAILS.some((account) => {
            return account.userName === user && account.password === password;
        });
    }

    static doesTokenExist(tokenFromHeader){
        return VALID_SESSIONS.hasOwnProperty(tokenFromHeader);
    }
}

module.exports = AccountHelper;
