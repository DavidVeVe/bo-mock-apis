// Administration Routes
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

// Roles
router.route('/api/v1/admin/roles')
	.get(requestHandler.admin.roles.get());

router.route('/api/v1/admin/roles/:id')
	.get(requestHandler.admin.rol.get());

router.route('/api/v1/admin/users')
	.get(requestHandler.admin.users.get());

router.route('/api/v1/admin/groups')
	.get(requestHandler.admin.groups.list.get());

router.route('/api/v1/admin/developers')
	.post(requestHandler.admin.developers.post());

router.route('/api/v1/admin/state/developers')
	.get(requestHandler.admin.state.developers.get());

router.route('/api/v1/admin/csv/developers/validate')
	.post(requestHandler.admin.csv.developers.validate.post());

router.route('/api/v1/userPreferences/manageUsers')
	.get(requestHandler.userPreferences.manageUsers.get());

// updated to v2 in revision #13
router.route('/api/v2/userPreferences/manageUsers')
	.get(requestHandler.userPreferences.manageUsers.get());

router.route('/api/v1/userPreferences/manageDevelopers')
	.get(requestHandler.userPreferences.manageDevelopers.get());

router.route('/api/v1/admin/changeUserPassword')
	.post(requestHandler.admin.changePwd.post);

router.route('/api/v1/admin/groups/:groupId')
	.get(requestHandler.admin.groups.one.get());

module.exports = router;
