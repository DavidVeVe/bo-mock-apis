const AbstractRouter = require('./AbstractRouter');

module.exports = {
    tld: {
        sprint: {
            overview: new AbstractRouter('tld/sprint/overview/', 'overview'),
            performanceTrend: new AbstractRouter('tld/sprint/', 'sprint'),
            taskType: new AbstractRouter('tld/sprint/taskType/', 'taskType')
        },
        task: {
            project: new AbstractRouter('tld/task/project/', 'project'),
        }
    },
};
