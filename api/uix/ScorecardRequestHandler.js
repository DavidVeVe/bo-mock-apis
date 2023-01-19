const AbstractRouter = require('./AbstractRouter');

module.exports = {
    scorecard: {
        developers: {
            active: new AbstractRouter('scorecard/developers/active/', 'active'),
        },
        onboardingTime: {
            dev: new AbstractRouter('scorecard/onboardingTime/dev/', 'dev'),
        },
    },
};
