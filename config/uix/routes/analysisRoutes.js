/**
 * Created by ulloaen on 13/04/2020
 */

const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

router.route('/api/v1/analysis/ce/timed/developers')
    .post(requestHandler.analysis.ce.timed.developers.post());
router.route('/api/v2/analysis/ce/timeless/developers/language')
    .post(requestHandler.analysis.ce.timeless.developers.language.post());
router.route('/api/v2/analysis/ce/timeless/developers')
    .post(requestHandler.analysis.ce.timeless.developers.self.post());
router.route('/api/v1/analysis/ce/timed/collections')
    .post(requestHandler.analysis.ce.timed.collections.post());
router.route('/api/v1/analysis/ce/timed/organizations')
    .post(requestHandler.analysis.ce.timed.organizations.post());
router.route('/api/v1/analysis/ce/timed/projects')
    .post(requestHandler.analysis.ce.timed.projects.post());
router.route('/api/v1/analysis/ce/filedirectory_commits/collections/developers')
    .post(requestHandler.analysis.ce.filedirectory_commits.collections.developers.post());
router.route('/api/v1/analysis/ce/clickthrough/developersByCollection')
    .post(requestHandler.analysis.ce.clickthrough.developersByCollection.post());
router.route('/api/v1/analysis/ce/clickthrough/revisions')
    .post(requestHandler.analysis.ce.clickthrough.revisions.post());
router.route('/api/v1/analysis/ce/clickthrough/files')
    .post(requestHandler.analysis.ce.clickthrough.files.post());
router.route('/api/v1/analysis/ce/clickthrough/projects')
    .post(requestHandler.analysis.ce.clickthrough.projects.post());
router.route('/api/v1/analysis/ce/clickthrough/collections')
    .post(requestHandler.analysis.ce.clickthrough.collections.post());
router.route('/api/v2/analysis/ce/timeless/collections')
    .post(requestHandler.analysis.ce.timeless.collections.post());
router.route('/api/v2/analysis/ce/timeless/organizations')
    .post(requestHandler.analysis.ce.timeless.organizations.post());
router.route('/api/v2/analysis/ce/timeless/projects')
    .post(requestHandler.analysis.ce.timeless.projects.post());
router.route('/api/v1/analysis/deliverables/phases')
    .post(requestHandler.analysis.deliverables.phases.post());
router.route('/api/v1/analysis/deliverables/cost')
    .post(requestHandler.analysis.deliverables.cost.post());
router.route('/api/v1/analysis/deliverables/clickthrough/revisions')
    .post(requestHandler.analysis.deliverables.clickthrough.revisions.post());
router.route('/api/v1/analysis/deliverables/clickthrough/developers')
    .post(requestHandler.analysis.deliverables.clickthrough.developers.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/combined')
    .post(requestHandler.analysis.overview.breakdownByFileType.combined.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/jobRoles')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.jobRoles.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/types')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.types.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/ranks')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.ranks.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/locations')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.locations.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/countries')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.countries.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/developers')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.developers.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/employers')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.employers.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/projects')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.projects.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/projects')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.projects.post());
router.route('/api/v3/analysis/overview/breakdownByFileType/detailed/organizations')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.organizations.post());

// HTF Feedback
router.route('/api/v1/analysis/ce/clickthrough/files/abCE/howToSolve/validateReview')
    .post(requestHandler.analysis.ce.clickthrough.validateReview.post());
router.route('/api/v1/analysis/ce/clickthrough/files/abCE/howToSolve/submitReview')
    .post(requestHandler.analysis.ce.clickthrough.submitReview.post());

module.exports = router;
