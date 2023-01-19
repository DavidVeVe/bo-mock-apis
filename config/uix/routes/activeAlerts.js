const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

router.route('/api/v2/alerts')
  .post(requestHandler.activeAlerts.v2.alerts.post());

module.exports = router;
