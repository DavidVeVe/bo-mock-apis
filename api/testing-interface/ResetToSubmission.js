/**
 * Created by ulloaen on 04/01/2019
 */

const SUCCESS_POST_TASKIDS = require('./Config').RESET_TO_SUBMISSION.SUCCESS_POST_SUBMISSION_IDS;

function ResetToSubmission() {
    const MESSAGES = {
        SUCCESS: 'FILE.UPDATE.SUCCESS',
        FAIL: 'FILE.UPDATE.FAIL',
        LOST: 'TASK.RESETFILES.FAIL.FILES.WILL.BE.LOST'
    };

    this.postMethod = function (req, res) {

        if (SUCCESS_POST_TASKIDS.includes(+req.params.taskId)) {
            res.json({
                'messageKey': MESSAGES.SUCCESS
            });
        } else {
            res.json({
                'messageKey': MESSAGES.FAIL
            });
        }
        //TODO Need to elaborate on when the last scenario will be used
    };
}

module.exports = ResetToSubmission;