// Overview Routes
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

// timeless/average
router.route('/api/v1/refreshtoken')
	.get(requestHandler.refreshToken.get);

router.route('/api/v1/authenticate')
	.post(requestHandler.authenticate.post);

module.exports = router;
