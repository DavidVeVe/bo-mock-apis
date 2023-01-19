/**
 * Created by ulloaen on 13/04/2020
 */

const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

router.route('/api/v1/logout')
    .get(requestHandler.logout.get);
router.route('/api/v1/userPreferences/adDataSources')
    .get(requestHandler.userPreferences.discoveredDataSources.get());
router.route('/api/v1/userPreferences/adDataSources')
    .post(requestHandler.userPreferences.discoveredDataSources.post());
router.route('/api/v1/userPreferences/adDataSources/discovered')
    .get(requestHandler.userPreferences.discoveredDataSources.get());
router.route('/api/v1/userPreferences/adDataSources/discovered')
    .post(requestHandler.userPreferences.discoveredDataSources.post());
router.route('/api/v1/userPreferences/adDataSources/onboarded')
    .get(requestHandler.userPreferences.discoveredDataSources.get());
router.route('/api/v1/userPreferences/adDataSources/onboarded')
    .post(requestHandler.userPreferences.discoveredDataSources.post());

router.route('/api/v1/userPreferences/manageDevelopers')
    .post(requestHandler.userPreferences.manageDevelopers.post());





// updated to v2 in revision #13
router.route('/api/v2/userPreferences/discoveredDataSources')
    .get(requestHandler.userPreferences.discoveredDataSources.get())
    .post(requestHandler.userPreferences.discoveredDataSources.post());

module.exports = router;