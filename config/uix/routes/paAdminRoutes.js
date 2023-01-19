const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

const multer = require('multer');
let storage = multer.memoryStorage();
let upload = multer({ storage: storage });


router.route('/api/v1/pa/admin/jobRoles')
	.get(requestHandler.pa.admin.jobRoles.get())
	.post(requestHandler.pa.admin.jobRoles.post());

router.route('/api/v1/pa/admin/tasks')
	.get(requestHandler.pa.admin.tasks.get());

router.route('/api/v1/pa/admin/tasks/:id')
	.get(requestHandler.pa.admin.tasks.get());

router.route('/api/v1/pa/admin/departments')
	.get(requestHandler.pa.admin.departments.get());

router.route('/api/v1/pa/admin/currencies')
	.get(requestHandler.pa.admin.currencies.get());

router.route('/api/v1/pa/admin/criteria')
	.get(requestHandler.pa.admin.criteria.get());

router.route('/api/v1/pa/admin/languages')
	.get(requestHandler.pa.admin.languages.get());

router.route('/api/v1/pa/admin/statistic/tasks')
	.post(requestHandler.pa.admin.statistic.tasks.post());

router.route('/api/v1/pa/admin/statistic/jobRoles')
	.post(requestHandler.pa.admin.statistic.jobRoles.post());

router.route('/api/v1/pa/admin/searchFields/tasks')
	.get(requestHandler.pa.admin.searchFields.tasks.get());

router.route('/api/v1/pa/admin/favorites/candidates')
	.get(requestHandler.pa.admin.favorites.candidates.get());

router.route('/api/v1/pa/admin/favorites/reportsViaEmails')
	.get(requestHandler.pa.admin.favorites.reportsViaEmails.get());

router.route('/api/v1/pa/admin/searchFields/candidates')
	.get(requestHandler.pa.admin.searchFields.candidates.get());

router.route('/api/v1/pa/admin/filter/candidates')
	.post(requestHandler.pa.admin.filter.candidates.post());

router.route('/api/v1/pa/admin/filter/tests')
	.post(requestHandler.pa.admin.filter.tests.post())
	.get(requestHandler.pa.admin.filter.tests.get());

router.route('/api/v1/pa/admin/reports/tasks')
	.post(requestHandler.pa.admin.reports.tasks.post());

router.route('/api/v1/pa/admin/searchFields/jobRoles')
	.get(requestHandler.pa.admin.searchFields.jobRoles.get());

router.route('/api/v1/pa/admin/tests/:id')
	.get(requestHandler.pa.admin.test.get());

router.route('/api/v1/pa/admin/jobRoles/:id')
	.get(requestHandler.pa.admin.jobRole.get())
	.post(requestHandler.pa.admin.jobRole.post());

router.route('/api/v1/pa/admin/candidates/sample')
	.get(requestHandler.pa.admin.candidates.sample.get());

router.route('/api/v1/pa/admin/candidates/validate')
	.post(upload.any(), requestHandler.pa.admin.candidates.validate.post());

router.route('/api/v1/pa/admin/candidates/validateCandidates')
	.post(requestHandler.pa.admin.candidates.validateCandidates.post());

router.route('/api/v1/pa/admin/candidates/:id')
	.get(requestHandler.pa.admin.candidates.candidate.get())
	.post(requestHandler.pa.admin.candidates.id.post());

router.route('/api/v1/pa/admin/counters/totalCandidates')
	.post(requestHandler.pa.admin.candidates.total.post());

router.route('/api/v1/pa/admin/tests/:parentId/tasks/:id')
	.get(requestHandler.pa.admin.tests.parentId.tasks.get());

router.route('/api/v1/pa/admin/tests/:parentId/signature')
	.get(requestHandler.pa.admin.tests.parentId.signature.get());

router.route('/api/v1/pa/admin/tasks/:taskId/files/:fileName')
	.get(requestHandler.pa.admin.taskFile.get());

router.route('/api/v1/pa/admin/candidates')
	.post(requestHandler.pa.admin.candidates.self.post());

router.route('/api/v1/pa/admin/tests/:parentId/encode')
	.get(requestHandler.pa.admin.tests.parentId.encode.get());

router.route('/api/v1/pa/admin/templates/emails/invitation/:someId')
	.get(requestHandler.pa.admin.templates.emails.invitation.get());

router.route('/api/v1/pa/admin/templates/emails/extraTimeInvitation/:someId')
	.get(requestHandler.pa.admin.templates.emails.extraTimeInvitation.get());

router.route('/api/v1/pa/admin/tests')
	.post(requestHandler.pa.admin.tests.self.post());

router.route('/api/v1/pa/admin/mailTo')
	.post(requestHandler.pa.admin.mailTo.post());

router.route('/api/v1/pa/admin/search/candidates')
	.post(requestHandler.pa.admin.search.candidates.post());

router.route('/api/v1/pa/admin/favorites/candidates/:id')
	.post(requestHandler.pa.admin.favorites.candidates.post())
	.delete(requestHandler.pa.admin.favorites.candidates.delete());

router.route('/api/v1/pa/admin/sets')
	.get(requestHandler.pa.admin.sets.get())
	.post(requestHandler.pa.admin.sets.post());

router.route('/api/v1/pa/admin/sets/:id')
	.get(requestHandler.pa.admin.set.get())
	.post(requestHandler.pa.admin.set.post())
	.delete(requestHandler.pa.admin.set.delete());

router.route('/api/v1/pa/admin/teams')
	.get(requestHandler.pa.admin.teams.get())
	.post(requestHandler.pa.admin.teams.post());

router.route('/api/v1/pa/admin/users')
	.get(requestHandler.pa.admin.users.get())
	.post(requestHandler.pa.admin.users.post());

router.route('/api/v1/pa/admin/users/:id')
	.post(requestHandler.pa.admin.users.post())
	.delete(requestHandler.pa.admin.users.delete());

router.route('/api/v1/pa/admin/employeeTypes')
	.get(requestHandler.pa.admin.employeeTypes.get());

router.route('/api/v1/pa/admin/templates/emails/followup')
	.get(requestHandler.pa.admin.templates.emails.followup.get());

router.route('/api/v1/pa/admin/testSessionDetails/:id')
	.get(requestHandler.pa.admin.testsSessionDetails.self.get());

router.route('/api/v1/pa/admin/testSessionDetails/:parentId/sessionEvents/:id')
	.get(requestHandler.pa.admin.testsSessionDetails.parentId.sessionEvents.get());

router.route('/api/v1/pa/admin/testSessionDetails/:parentId/sessionEventsCommits/:id')
	.get(requestHandler.pa.admin.testsSessionDetails.parentId.sessionEventsCommits.get());

module.exports = router;
