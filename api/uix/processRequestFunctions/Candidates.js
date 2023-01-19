const filesBuffer = require("../FilePathBuffer");
const filter = require("../FilterAndSortFunctions/PA/Candidates").filter;

module.exports = {
	process: (data, body, params, token) => {
		let candidates = filesBuffer.paths.pa.admin.filter.candidates.getInitialPostFile();

		if (body && body.filter) {
			const bodyFilter = body.filter;
			const candidate = bodyFilter.candidate;

			if (candidate) {
				candidates = filter.byType(candidates, candidate.type, token);
				candidates = filter.byCandidateIds(candidates, candidate.ids);
				candidates = filter.byCandidateName(candidates, candidate.name);
			}

			const tests = body.filter.tests;
			if (tests) {
				candidates = filter.byCriteria(candidates, tests.criteria);
				candidates = filter.byTestsScore(candidates, tests.minScore);
			}

			const jobRole =  body.filter.jobRole;
			if (jobRole) {
				candidates = filter.byJobRoleState(candidates, jobRole.state);
				candidates = filter.byHiringStatus(candidates, jobRole.hiringStatus);
			}
		}

		data.totalCandidates = candidates.length;

		return data;
	}
};
