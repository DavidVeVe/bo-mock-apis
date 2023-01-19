/**
 * Created by ulloaen on 10/01/2019
 */

const CONFIG = {
    //Include taskId with success responses for endpoint /api/v1/testSessions/{testSessionId}/tasks/{taskId}/activity
    ACTIVITY_SUCCESS_TASK_IDS: [2497, 2499, 0],
    //Include fileNames with success responses for endpoint /api/v1/testSessions/{testSessionId}/tasks/{taskId}/files/{filename}/
    FILES: {
        SUCCESS_POST_FILE_NAME: ['word_search.js', 'word_connecting_medium.js', 'demo_file.js', 'word_search.java', 'queries_demo.sql'],
        SUCCESS_DELETE_FILE_NAME: [''],
    },
    //Include taskId with success responses for endpoint /api/v1/testSessions/{testSessionId}/tasks/{taskId}/resetToSubmission
    RESET_TO_SUBMISSION: {
        SUCCESS_POST_SUBMISSION_IDS: [6579, 2499,]
    },
    //Include testSessionId with success responses for endpoint /api/v1/testSessions/{testSessionId}/snapshots
    SNAPSHOTS: {
        SUCCESS_POST_SESSION_IDS: [1738, 0, 1742, 7, 1750, 1751, 1752]
    },
    //Include taskId with success responses for endpoint /api/v1/testSessions/{testSessionId}/tasks/{taskId}
    TASK_ID: {
        SUCCESS_POST_TASK_IDS: [2497, 0, 2499, 2498, 2500]

    },
    //Include testSessionId with success responses for endpoint /api/v1/testSessions/{testSessionId}
    TEST_SESSION: {
        SUCCESS_POST_SESSION_IDS: [1738, 0, 1742, 4, 1743, 1744, 7, 1746, 1747, 1750, 1751, 1752, 1753],
        EXPIRED_POST_SESSION_IDS: [1]
    },
    //Include taskId with success responses for endpoint /api/v1/testSessions/{testSessionId}/tasks/{taskId}/listOfAnswers
    LIST_OF_ANSWERS: {
        SUCCESS_POST_TASK_IDS: [2497, 0]
    },

    // Include sessionId in SESSIONS_USING_TASK_SWITCHING if you need to test functionality of switching from one task to another
    // To avoid simultaneous requests conflicts, if you need to switch from one task to another one, create a new testSession for it.
    SESSIONS_USING_TASK_SWITCHING: [1747, 1752, 1743],
    ACTIVE_TASK_IDS: {
        CURRENT_ACTIVE: {}
    },

    // Include sessionId which needs to wait more time in execute & submit function
    LONG_RESPONSE_TIME_SESSIONS: [1750, 1751],

    // Include sessionId with success in feedback survey
    SUCCESS_FEEDBACK_SURVEY: [1744, 1753]
};

module.exports = CONFIG;
