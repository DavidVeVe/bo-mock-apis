/**
 * Created by ulloaen on 21/06/2019
 */

const VALID_SESSIONS = {
    'test': ['test@uix.com'],
    'john.snow': ['john.snow@uix.com'],
    '121': ['test_121@uix.com'],
    'empty_jobroles': ['user_empty_jobroles@uix.com'],
    'new_pa_user': ['new_pa_user@uix.com'],
    'in_app_notification': ['in_app_notification@uix.com'],
    'user_saml': ['user@saml.com'],
};
const AVAILABLE_ACCOUNTS = [
    {
        userName: 'test@uix.com',
        password: 'p@55w0rd!'
    },
    {
        userName: 'john.snow@uix.com',
        password: 'IKn0wN0th1ng!'
    },
    {
        userName: 'test_121@uix.com',
        password: 'p@55w0rd!'
    },
    {
        userName: 'user_empty_jobroles@uix.com',
        password: 'p@55w0rd!'
    },
    {
        userName: 'new_pa_user@uix.com',
        password: 'p@55w0rd!'
    },
    {
        userName: 'in_app_notification@uix.com',
        password: 'p@55w0rd!'
    },
    {
        userName: 'user@saml.com',
        password: 'p@55w0rd!'
    },
    {
        userName: 'user@sso.com',
        password: 'p@55w0rd!'
    },
];

module.exports.AVAILABLE_ACCOUNTS = AVAILABLE_ACCOUNTS;
module.exports.VALID_SESSIONS = VALID_SESSIONS;
