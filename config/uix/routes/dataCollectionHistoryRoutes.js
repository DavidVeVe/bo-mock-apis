const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

router.route('/api/v2/integrators')
	.get(requestHandler.integrators.get());

router.route('/api/v1/userPreferences/dataCollectionHistory')
	.get(requestHandler.userPreferences.dataCollectionHistory.get())
	.post(requestHandler.userPreferences.dataCollectionHistory.post());

// updated to v2 in revision #13
router.route('/api/v2/userPreferences/dataCollectionHistory')
	.get(requestHandler.userPreferences.dataCollectionHistory.get())
	.post(requestHandler.userPreferences.dataCollectionHistory.post());


router.route('/api/v2/status/integrators')
	.get(requestHandler.status.integrators.get());

router.route('/api/v1/dataCollectionHistory/counters')
	.post(requestHandler.dataCollectionHistory.counters.post());

router.route('/api/v2/dataCollectionHistory/availableFilters')
	.get(requestHandler.dataCollectionHistory.availableFilters.get());

router.route('/api/v2/dataCollectionHistory')
	.post(requestHandler.dataCollectionHistory.self.post());

router.route('/api/v1/dataCollectionHistory/split')
	.post(requestHandler.dataCollectionHistory.split.post());

module.exports = router;