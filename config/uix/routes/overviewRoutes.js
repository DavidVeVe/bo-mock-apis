// Overview Routes
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

// timeless/average
router.route('/api/v1/analysis/overview/timeless/average/combined')
    .post(requestHandler.analysis.overview.timeless.average.combined.post());

router.route('/api/v1/analysis/overview/timeless/average/selection')
    .post(requestHandler.analysis.overview.timeless.average.selection.post());

// timeless/detailed
router.route('/api/v3/analysis/overview/timeless/detailed/projects')
    .post(requestHandler.analysis.overview.timeless.detailed.projects.post());

router.route('/api/v3/analysis/overview/timeless/detailed/organizations')
    .post(requestHandler.analysis.overview.timeless.detailed.organizations.post());

// timeless/combined
router.route('/api/v2/analysis/overview/timeless/combined')
    .post(requestHandler.analysis.overview.timeless.combined.self.post());

router.route('/api/v2/analysis/overview/timeless/combined/projects')
    .post(requestHandler.analysis.overview.timeless.combined.projects.post());

router.route('/api/v2/analysis/overview/timeless/combined/developers')
    .post(requestHandler.analysis.overview.timeless.combined.developers.post());

router.route('/api/v2/analysis/overview/timeless/combined/projects')
    .post(requestHandler.analysis.overview.timeless.combined.projects.post());

router.route('/api/v2/analysis/overview/timeless/combined/segments')
    .post(requestHandler.analysis.overview.timeless.combined.segments.post());

router.route('/api/v2/analysis/overview/timeless/combined/jobRoles')
    .post(requestHandler.analysis.overview.timeless.combined.jobRoles.post());

router.route('/api/v2/analysis/overview/timeless/combined/ranks')
    .post(requestHandler.analysis.overview.timeless.combined.ranks.post());

router.route('/api/v2/analysis/overview/timeless/combined/types')
    .post(requestHandler.analysis.overview.timeless.combined.types.post());

router.route('/api/v2/analysis/overview/timeless/combined/locations')
    .post(requestHandler.analysis.overview.timeless.combined.locations.post());

router.route('/api/v2/analysis/overview/timeless/combined/countries')
    .post(requestHandler.analysis.overview.timeless.combined.countries.post());

router.route('/api/v2/analysis/overview/timeless/combined/employers')
    .post(requestHandler.analysis.overview.timeless.combined.employers.post());

router.route('/api/v2/analysis/overview/timeless/combined/organizations')
    .post(requestHandler.analysis.overview.timeless.combined.organizations.post());


// Monthly trend
router.route('/api/v2/analysis/overview/monthlyTrend')
    .post(requestHandler.analysis.overview.monthlyTrend.self.post());

router.route('/api/v2/analysis/overview/monthlyTrend/projects')
    .post(requestHandler.analysis.overview.monthlyTrend.projects.post());

router.route('/api/v2/analysis/overview/monthlyTrend/segments')
    .post(requestHandler.analysis.overview.monthlyTrend.segments.post());

router.route('/api/v2/analysis/overview/monthlyTrend/jobRoles')
    .post(requestHandler.analysis.overview.monthlyTrend.jobRoles.post());

router.route('/api/v2/analysis/overview/monthlyTrend/types')
    .post(requestHandler.analysis.overview.monthlyTrend.types.post());

router.route('/api/v2/analysis/overview/monthlyTrend/ranks')
    .post(requestHandler.analysis.overview.monthlyTrend.ranks.post());

router.route('/api/v2/analysis/overview/monthlyTrend/locations')
    .post(requestHandler.analysis.overview.monthlyTrend.locations.post());

router.route('/api/v2/analysis/overview/monthlyTrend/countries')
    .post(requestHandler.analysis.overview.monthlyTrend.countries.post());

router.route('/api/v2/analysis/overview/monthlyTrend/employers')
    .post(requestHandler.analysis.overview.monthlyTrend.employers.post());

router.route('/api/v2/analysis/overview/monthlyTrend/organizations')
    .post(requestHandler.analysis.overview.monthlyTrend.organizations.post());


// breakdownByFileType
router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/projects')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.projects.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/projects')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.projects.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/combined')
    .post(requestHandler.analysis.overview.breakdownByFileType.combined.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/segments')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.segments.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/jobRoles')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.jobRoles.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/ranks')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.ranks.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/types')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.types.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/locations')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.locations.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/countries')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.countries.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/developers')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.developers.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/employers')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.employers.post());

router.route('/api/v2/analysis/overview/breakdownByFileType/detailed/organizations')
    .post(requestHandler.analysis.overview.breakdownByFileType.detailed.organizations.post());


// attritionInTheCodebase
router.route('/api/v2/analysis/overview/attritionInTheCodebase/combined')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.combined.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/segments')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.segments.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/jobRoles')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.jobRoles.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/ranks')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.ranks.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/types')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.types.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/locations')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.locations.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/countries')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.countries.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/employers')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.employers.post());

router.route('/api/v2/analysis/overview/attritionInTheCodebase/detailed/organizations')
    .post(requestHandler.analysis.overview.attritionInTheCodebase.detailed.organizations.post());

//clickthrough

router.route('/api/v3/analysis/overview/clickthrough/organizations/')
    .post(requestHandler.analysis.overview.clickthrough.organizations.post());

router.route('/api/v3/analysis/overview/clickthrough/projects/')
    .post(requestHandler.analysis.overview.clickthrough.projects.post());

router.route('/api/v3/analysis/overview/clickthrough/collections/')
    .post(requestHandler.analysis.overview.clickthrough.collections.post());

router.route('/api/v4/analysis/overview/clickthrough/developers/')
    .post(requestHandler.analysis.overview.clickthrough.developers.post());

module.exports = router;
