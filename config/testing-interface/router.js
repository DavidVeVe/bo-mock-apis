/**
 * Created by ulloaen on 31/12/2018
 */


'use strict';

const
    express = require('express'),
    router = express.Router();

const requestHandler = require('../../api/testing-interface/RequestHandler');



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

router.route('/api/v1/authenticate')
    .post(requestHandler.authenticate.postMethod);

router.route('/api/v1/testSessions/:sessionId')
    .get(requestHandler.testSessions.getMethod)
    .post(requestHandler.testSessions.postMethod);

router.route('/api/v1/testSessions/:sessionId/tasks')
    .get(requestHandler.tasks.getMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId')
    .get(requestHandler.taskId.getMethod)
    .post(requestHandler.taskId.postMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/resetToSubmission')
    .post(requestHandler.resetToSubmission.postMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/submissions')
    .get(requestHandler.submissions.getMethod)
    .post(requestHandler.submissions.postMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/submissions/:submissionId')
    .get(requestHandler.submissions.getBySubmissionId);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/timer')
    .get(requestHandler.timer.getMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/files')
    .get(requestHandler.files.getMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/files/:filename')
    .get(requestHandler.files.getByFileName)
    .post(requestHandler.files.postByFileName)
    .delete(requestHandler.files.deleteByFileName);

router.route('/api/v1/testSessions/:sessionId/snapshots')
    .get(requestHandler.snapshots.getMethod)
    .post(requestHandler.snapshots.postMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/activity')
    .post(requestHandler.activity.postMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/listOfAnswers')
    .post(requestHandler.listOfAnswers.postMethod)
    .get(requestHandler.listOfAnswers.getMethod);

router.route('/api/v1/signature')
    .post(requestHandler.signature.postMethod);

router.route('/api/v1/errorLog')
    .post(requestHandler.errorLog.postMethod);

router.route('/api/v1/testSessions/:sessionId/feedback')
    .post(requestHandler.feedback.postMethod);

router.route('/api/v1/testSessions/:sessionId/tasks/:taskId/heartBeat')
    .post(requestHandler.heartbeat.postMethod);

router.route('/favicon.ico')
    .get(requestHandler.favicon.getMethod);

module.exports = router;
