/**
 * Created by ulloaen on 13/04/2020
 */
const router = require('express').Router();
const requestHandler = require('../../../api/uix/RequestHandler');

// Login Exclusions
router.route('/api/v1/login/exclusions')
    .post(requestHandler.login.exclusions.post());
router.route('/api/v1/login/exclusions/review')
    .post(requestHandler.login.review.post());
router.route('/api/v1/login/exclusions/inclusions')
    .post(requestHandler.login.inclusions.post());
router.route('/api/v1/login/exclusions/exclude')
    .post(requestHandler.login.exclude.post());
router.route('/api/v1/login/exclusions/include')
    .post(requestHandler.login.include.post());
router.route('/api/v1/login/exclusions/counters')
    .get(requestHandler.login.counters.get());
// Don't exclude
router.route('/api/v1/login/exclusions/review/invalid')
    .post(requestHandler.login.invalid.post());
// Undo
router.route('/api/v1/login/exclusions/undo/:processId')
    .get(requestHandler.login.undo.get());

router.route('/api/v1/login/exclusions/history')
    .post(requestHandler.login.history.post());

module.exports = router;