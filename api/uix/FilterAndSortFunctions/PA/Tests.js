const filesBuffer = require('../../FilePathBuffer');
module.exports = {
	filter: {
		byAggregationLevel: (tests, aggregationLevel) => {
			if (aggregationLevel === "candidate") {
				const candidates = filesBuffer.paths.pa.admin.filter.candidates.getInitialPostFile();
				const testsByCandidates = tests.reduce((map, test) => {
					if (!map[test.candidateId]) map[test.candidateId] = [];
					map[test.candidateId].push(test);

					return map;
				}, {});
				return candidates.map(candidate => {
					return {
						candidateId: candidate.id,
						tests: testsByCandidates[candidate.id] || []
					}
				})
			} else {
				const paJobRoles = filesBuffer.paths.pa.admin.jobRoles.getInitialGetFile();
				const testsByCandidates = tests.reduce((map, test) => {
					if (!map[test.paJobRoleId]) map[test.paJobRoleId] = [];
					map[test.paJobRoleId].push(test);

					return map;
				}, {});
				return paJobRoles.map(paJobRole => {
					return {
						paJobRoleId: paJobRole.id,
						tests: testsByCandidates[paJobRole.id] || []
					}
				})
			}
		}
		,
		byCandidateIds: (tests, ids) => tests.filter(test => {
			if (test.candidateId) return ids.includes(test.candidateId);
			if (test.paJobRoleId) test.tests.filter(test => ids.includes(test.candidateId));
			return true;
		}),
		byPaJobRoleIds: (tests, ids) => tests.filter(test => ids.includes(test.paJobRoleId))
	},
	filterFields: (aggregatedTests, fields) => {
		fields = fields ? fields.reduce((fieldsMap, field) => (fieldsMap[field] = true) && fieldsMap, {}) : {originalScore: true};

		return aggregatedTests.reduce((newTests, aggregatedTest) => {
			aggregatedTest.tests.forEach(test => {
				if (!fields.predictivePerformanceQuartile && test.summary) delete test.summary.predictivePerformanceQuartile;
				if (!fields.originalScore && test.summary) delete test.summary.originalScore;
				if (!fields.criteria && test.summary) delete test.summary.criteria;
				if (!fields.completedOn && test.summary) delete test.summary.completedOn;
				if (!fields.invitedOn) delete test.invitedOn;
				if (!fields.testClosingDate) delete test.testClosingDate;
				if (!fields.timeRemaining && test.summary) delete test.summary.timeRemaining;
			});

			newTests.push(aggregatedTest);

			return newTests;
		}, [])
	}
};
