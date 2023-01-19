
/**
 * Created by ulloaen on 13/04/2020
 */
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

router.route('/api/v1/adconfigs/progressStatus')
  .post(requestHandler.progressStatus.post());

router.route('/api/v1/ad/dataSources')
    .post(requestHandler.adDataSources.post());
router.route('/api/v1/ad/availableFilters')
    .get(requestHandler.ddsAvailableFilters.get());
router.route('/api/v1/ad/dataSources/stats')
    .post(requestHandler.adDataSourcesStats.post());
router.route('/api/v1/ad/dsPendingForSync')
    .get(requestHandler.adDsPendingForSync.get());
router.route('/api/v1/ad/dataSources/export')
    .post(requestHandler.adExportDataSources.post());
router.route('/api/v1/ad/autoOnboardEnabled')
    .get(requestHandler.autoOnboardEnabled.get());
router.route('/api/v2/adconfigs')
    .get(requestHandler.adConfigs.get());
router.route('/api/v3/adconfigs')
    .get(requestHandler.adConfigs3.get());
router.route('/api/v2/adconfigs')
    .post(requestHandler.adConfigs.post());
router.route('/api/v1/adconfigs/:id')
    .post(requestHandler.adConfigs.post());
router.route('/api/v1/adconfigs/infraTypes')
    .get(requestHandler.infraTypes.get());
router.route('/api/v1/adconfigs/integrations')
    .get(requestHandler.integrations.get());
router.route('/api/v1/adconfigs/activeUsers')
    .get(requestHandler.activeUsers.get());
router.route('/api/v1/adconfigs/validate')
    .post(requestHandler.validate.post());

router.route('/api/v1/autodiscovery/dataSources')
    .post(requestHandler.autoDiscoveryDataSources.post());
router.route('/api/v1/autodiscovery/availableFilters')
    .get(requestHandler.autoDiscoveryAvailableFilters.get());
router.route('/api/v1/autodiscovery/availableFilters')
    .post(requestHandler.autoDiscoveryAvailableFilters.post());
router.route('/api/v1/autodiscovery/datasources/stats')
    .post(requestHandler.autoDiscoveryDataSourcesStats.post());
router.route('/api/v1/autodiscovery/dsPendingForSync')
    .get(requestHandler.autoDiscoveryDsPendingForSync.get());
router.route('/api/v1/autodiscovery/datasources/export')
    .post(requestHandler.autoDiscoveryExportDataSources.post());
router.route('/api/v1/autodiscovery/autoOnboardEnabled')
    .get(requestHandler.autoDiscoveryautoOnboardEnabled.get());
router.route('/api/v1/autodiscovery/datasources/onboard')
    .post(requestHandler.autoDiscoveryOnboard.post());
router.route('/api/v1/autodiscovery/datasources/ignore')
    .post(requestHandler.autoDiscoveryIgnore.post());
router.route('/api/v1/autodiscovery/datasources/unignore')
    .post(requestHandler.autoDiscoveryUnignore.post());


module.exports = router;
