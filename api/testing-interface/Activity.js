/**
 * Created by ulloaen on 04/01/2019
 */
const ACTIVITY_SUCCESS_TASK_IDS = require('./Config').ACTIVITY_SUCCESS_TASK_IDS;

function Activity() {
    const MESSAGES = {
        SUCCESS: 'STATE.SAVE.SUCCESS',
        FAIL: 'STATE.SAVE.FAIL'
    };

    this.postMethod = function (req, res) {
        let taskId = +req.params.taskId;

        if (ACTIVITY_SUCCESS_TASK_IDS.includes(taskId)) {
            res.json({
                'messageKey': MESSAGES.SUCCESS
            });
        } else {
            res.json({
                'messageKey': MESSAGES.FAIL
            });
        }
    };
}

module.exports = Activity;