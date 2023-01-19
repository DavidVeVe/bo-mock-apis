/**
 * Created by ulloaen on 10/06/2019
 */

const TESTING_INTERFACE_CONFIG = {
    name: 'Testing Interface',
    defaultPort : '9000',
    configPath : './config/testing-interface/app.js' // relative  to root
};

const UIX_CONFIG = {
    name: 'UIX',
    defaultPort : '9001',
    configPath : './config/uix/app.js' // relative  to root
};

const PROJECT_CONFIG = {
    'ti': TESTING_INTERFACE_CONFIG,
    'uix': UIX_CONFIG
};

module.exports = PROJECT_CONFIG;