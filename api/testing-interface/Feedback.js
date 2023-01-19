
const SUCCESS_POST_TASK_IDS = require('./Config').SUCCESS_FEEDBACK_SURVEY;

const POST_MESSAGES = {
    SUCCESS: 'SESSION.FEEDBACK.SAVE.SUCCESS',
    FAIL: 'SESSION.FEEDBACK.SAVE.FAIL'
};

class Feedback {

    postMethod(req, res) {

        if (SUCCESS_POST_TASK_IDS.includes(+req.params.sessionId)) {
            res.json({'messageKey': POST_MESSAGES.SUCCESS});
        } else {
            res.json({'messageKey': POST_MESSAGES.FAIL});
        }
    }
}

module.exports = Feedback;