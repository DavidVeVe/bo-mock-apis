/**
 * Created by ulloaen on 13/06/2019
 */

'use strict';

const router = require('express').Router();
const requestHandler = require('../../api/uix/RequestHandler');

router.route('*')
    .all(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
            res.status(200).send('options');
        } else {
            next();
        }
    });

router.route('/api/v1/support')
    .get(requestHandler.support.get());
router.route('/api/v1/support')
    .get(requestHandler.support.get());
router.route('/api/v1/ssoCheck')
    .post(requestHandler.ssoCheck.post);

router.route('/api/v4/profile')
    .get(requestHandler.profile.get());

router.route('/api/v1/profile/new_feature_notification')
    .get(requestHandler.newFeatureNotification.get());
router.route('/api/v1/profile/new_feature_notification')
    .post(requestHandler.newFeatureNotification.post());

router.route('/api/v1/profile/blocks')
    .post(requestHandler.blocks.post());

router.route('/api/v4/profile')
    .post(requestHandler.profile.post());
router.route('/api/v2/favorites')
    .get(requestHandler.favorites.get());
router.route('/api/v2/favorites/ces')
    .get(requestHandler.favoritesCes.get());
router.route('/api/v2/favorites/deliverables')
    .get(requestHandler.favoritesDeliverables.get());
router.route('/api/v2/favorites/overview')
    .get(requestHandler.favoritesOverview.get());
router.route('/api/v1/counters')
    .get(requestHandler.counters.get());
router.route('/api/v1/counters/totalActiveAlerts')
    .post(requestHandler.activeAlertsCounters.post());
router.route('/api/v2/deliverables')
    .get(requestHandler.deliverables.get());
router.route('/api/v1/organizations')
    .get(requestHandler.organizations.get());
router.route('/api/v2/projects')
    .get(requestHandler.projects.list.get());
router.route('/api/v3/projects/:id')
    .get(requestHandler.projects.one.get());
router.route('/api/v2/collections')
    .get(requestHandler.collections.list.get());
router.route('/api/v2/collections/:id')
    .get(requestHandler.collections.one.get());
router.route('/api/v2/collections/:id')
    .delete(requestHandler.collections.deleteOne.delete());
router.route('/api/v2/developers')
    .get(requestHandler.developers.get());
router.route('/api/v2/developers')
    .post(requestHandler.developers.get());
router.route('/api/v2/employers')
    .get(requestHandler.employers.get());
router.route('/api/v2/locations')
    .get(requestHandler.locations.get());
router.route('/api/v2/types')
    .get(requestHandler.types.get());
router.route('/api/v1/countries')
    .get(requestHandler.countries.get());
router.route('/api/v2/ranks')
    .get(requestHandler.ranks.get());
router.route('/api/v1/jobRoles')
    .get(requestHandler.jobRoles.get());
router.route('/api/v1/segments')
    .get(requestHandler.segments.get());
router.route('/api/v1/status/alerts/newAlerts')
    .get(requestHandler.newAlerts.get());
router.route('/api/v1/alerts/sca/getVulnerabilityDetails/:type/:dependencyId')
    .get(requestHandler.getVulnerabilityDetails.get());
router.route('/api/v1/alerts')
    .post(requestHandler.alerts.post());
router.route('/api/v1/alerts/subscription')
    .get(requestHandler.alertsSubscription.get())
    .post(requestHandler.alertsSubscription.post());
router.route('/api/v1/alerts/:id')
    .get(requestHandler.alert.get())
    .post(requestHandler.alertStatus.post());
router.route('/api/v1/types')
    .get(requestHandler.types.get());
router.route('/api/v1/errorLog')
    .post(requestHandler.errorLog.post);
router.route('/ssoLogin')
    .get(function (req, res) {
        res.sendStatus(200);
    });

router.route('/api/v1/releaseNotes')
.get(requestHandler.releaseNotes.list.get());

router.route('/api/v1/history/groups')
    .get(requestHandler.manageGroups.groups.get());

router.route('/api/v1/history/roles')
    .get(requestHandler.manageRoles.roles.get());


router.route('/api/v2/api-docs')
.get(requestHandler.apiDocs.list.get());

router.route('/api/v2/biDatasets')
.get(requestHandler.biDatasets.list.get());

router.route('/api/v2/biDatasetsTypes')
.get(requestHandler.biDatasets.biDatasetsTypes.get());

router.route('/api/v2/history/customDeliverables')
    .get(requestHandler.customDeliverables.get());

router.route('/api/v1/deliverables/:id')
    .get(requestHandler.deliverable.get());

module.exports = router;
