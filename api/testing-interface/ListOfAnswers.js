/**
 * Created by ulloaen on 04/01/2019
 */

const AbstractFilePath = require('./AbstractFilePath');
const SUCCESS_POST_TASK_IDS = require('./Config').LIST_OF_ANSWERS.SUCCESS_POST_TASK_IDS;


const POST_MESSAGES = {
    SUCCESS: 'TASK.ANSWERS.UPDATE.SUCCESS',
    FAIL: 'TASK.ANSWERS.UPDATE.FAIL'
};

class ListOfAnswers {

    postMethod(req, res) {

        if (SUCCESS_POST_TASK_IDS.includes(+req.params.taskId)) {
            res.json({'messageKey': POST_MESSAGES.SUCCESS});
        } else {
            res.sendStatus(400);
        }
    }

    getMethod(req, res) {
        let filePath = AbstractFilePath.getFilePath(AbstractFilePath.getSessionBasePath(req.params.sessionId, 'listOfAnswers/')),
            fileName = AbstractFilePath.fileExistsSync(`${filePath}listOfAnswers-${req.params.taskId}-get.json`);

        if (fileName) {
            res.sendFile(fileName);
        } else {
            res.sendStatus(400);
        }
    }
}


module.exports = ListOfAnswers;