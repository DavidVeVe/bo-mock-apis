// Scorecard Routes
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

//TLD Overview Metric
router.route('/api/v1/tld/sprint/overview').post(requestHandler.tld.sprint.overview.post());

//TLD Task Projects
router.route('/api/v1/tld/task/project').post(requestHandler.tld.task.project.post());

//TLD Performance Trend
router.route('/api/v1/tld/sprint').post(requestHandler.tld.sprint.performanceTrend.post());

//TLD Task type chart
router.route('/api/v1/tld/sprint/taskType').post(requestHandler.tld.sprint.taskType.post());

module.exports = router;
