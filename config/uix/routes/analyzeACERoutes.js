'use strict';

// Analyze ACE Routes
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

router.route('/api/v1/activityData')
    .post(requestHandler.activityData.post());

module.exports = router;