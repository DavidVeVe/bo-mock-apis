const filesBuffer = require("../FilePathBuffer");

const tests = filesBuffer.paths.pa.admin.filter.tests.getInitialPostFile();
const paJobRoles = filesBuffer.paths.pa.admin.jobRoles.getInitialGetFile();
const candidates = filesBuffer.paths.pa.admin.filter.candidates.getInitialPostFile();
const tasks = filesBuffer.paths.pa.admin.tasks.getInitialGetFile();

module.exports = {
	getTest: {processGet: (params, data) => tests.find(test => test.testId === +params.id)},
	getJobRole: {processGet: (params, data) => paJobRoles.find(paJobRole => paJobRole.id === +params.id)},
	getCandidate: {processGet: (params, data) => candidates.find(candidate => candidate.id === +params.id)},
	getTask: {processGet: (params, data) => params.id ? tasks.find(task => task.id === +params.id) : tasks.forEach(task => {
		if (task.description.full) delete task.description.full;
		delete skillsTested;
		delete files;
		})},
	getJobRoles: {
		processGet: (params, data) => {
			data.forEach(jobRole => {
					delete jobRole.introductoryMessage;
					if (jobRole.description) {
						delete jobRole.description.full;
					}
				}
			);
			return data;
		}
	}
};