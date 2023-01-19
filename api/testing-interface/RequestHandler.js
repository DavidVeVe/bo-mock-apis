/**
 * Created by ulloaen on 04/01/2019
 */

const Activity = require('./Activity'),
    Authenticate = require('./Authenticate'),
    Files = require('./Files'),
    ListOfAnswers = require('./ListOfAnswers'),
    RefreshToken = require('./RefreshToken'),
    ResetToSubmission = require('./ResetToSubmission'),
    Snapshots = require('./Snapshots'),
    Submissions = require('./Submissions'),
    TaskId = require('./TaskId'),
    Tasks = require('./Tasks'),
    TestSessions = require('./TestSessions'),
    Timer = require('./Timer'),
    Signature = require('./Signature'),
    ErrorLog = require('./ErrorLog'),
    Feedback = require('./Feedback'),
    Heartbeat = require('./Heartbeat'),
    Favicon = require('./Favicon');

const RequestHandler = {
    activity: new Activity(),
    authenticate: new Authenticate(),
    files: new Files(),
    listOfAnswers: new ListOfAnswers(),
    refreshToken: new RefreshToken(),
    resetToSubmission: new ResetToSubmission(),
    signature: new Signature(),
    snapshots: new Snapshots(),
    submissions: new Submissions,
    taskId: new TaskId(),
    tasks: new Tasks(),
    testSessions: new TestSessions(),
    timer: new Timer(),
    errorLog: new ErrorLog(),
    feedback: new Feedback(),
    heartbeat: new Heartbeat(),
    favicon: new Favicon()
};

module.exports = RequestHandler;
