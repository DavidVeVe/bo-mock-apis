const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

router.route('/api/v1/dataSourceList')
    .get(requestHandler.dataSources.self.get())
    .post(requestHandler.dataSources.self.post());

router.route('/api/v1/userPreferences/dataSources')
    .get(requestHandler.userPreferences.dataSources.get())
    .post(requestHandler.userPreferences.dataSources.post());

router.route('/api/v2/dataSources/:id')
    .get(requestHandler.dataSources.one.get());

// updated to v2 in revision #13
router.route('/api/v2/userPreferences/dataSources')
    .get(requestHandler.userPreferences.dataSources.get())
    .post(requestHandler.userPreferences.dataSources.post());

router.route('/api/v2/status/dataSources')
    .get(requestHandler.status.dataSources.get())
    .post(requestHandler.status.dataSources.post());

router.route('/api/v2/dataSources/availableFilters')
    .get(requestHandler.dataSources.availableFilters.get())
    .post(requestHandler.dataSources.availableFilters.post());

router.route('/api/v1/health/dataSources')
    .get(requestHandler.dataSources.health.get())
    .post(requestHandler.dataSources.health.post());

router.route('/api/v1/admin/state/dataSources')
    .get(requestHandler.adStateDataSources.get());

router.route('/api/v4/dataSources')
    .post(requestHandler.dataSources.add.post());

router.route('/api/v1/updateDataSources')
    .post(requestHandler.dataSources.updateFew.post());

router.route('/api/v3/validation/dataSources/url')
    .post(requestHandler.dataSources.validateUrl.post());

router.route('/api/v2/dataSources/export')
    .post(requestHandler.dataSources.csv.post());

router.route('/api/v2/deleteDataSources')
    .post(requestHandler.dataSources.deleteFew.post());

router.route('/api/v1/dataSources/validate/instances')
    .post(requestHandler.dataSources.validateDS.post());

router.route('/api/v1/dataSources/counters')
    .post(requestHandler.dataSources.counters.post());

router.route('/api/v1/dataSources/infraTypes')
    .get(requestHandler.dataSources.infraTypes.get());

router.route('/api/v2/samples/dataSources?:infraTypeId')
    .get(requestHandler.dataSources.infraTypes.get());

router.route('/api/v1/dataSources/:id')
    .get(requestHandler.dataSources.getParticularDataSource.get())
    .delete(requestHandler.dataSources.getParticularDataSource.delete());

router.route('/api/v3/dataSources/:id')
    .post(requestHandler.dataSources.update.post());


module.exports = router;
