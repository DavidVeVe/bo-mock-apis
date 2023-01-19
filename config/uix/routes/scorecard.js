// Scorecard Routes
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

//Active Developers
router.route('/api/v1/scorecard/developers/active')
    .get(requestHandler.scorecard.developers.active.get());

//Developers Onboarding
router.route('/api/v1/scorecard/onboardingTime/dev')
    .get(requestHandler.scorecard.onboardingTime.dev.get());

module.exports = router;
