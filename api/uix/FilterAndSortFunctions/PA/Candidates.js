const cfg = require("./../../Config");
module.exports = {
	filter: {
		byCandidateIds: (candidates, ids = null) => candidates.filter(candidate => Array.isArray(ids) ? ids.includes(candidate.id) : true),
		byCandidateName: (candidates, name = "") => candidates.filter(candidate => {
			return name === "" || (candidate.firstName + " " + candidate.secondName).toLowerCase() === name.toLowerCase()
		}),
		byType: (candidates, type = null, token) => candidates.filter(candidate => {
			if (type === "my") return candidate.invitedBy === cfg.VALID_SESSIONS[token][0];
			if (type === "other") return candidate.invitedBy !== cfg.VALID_SESSIONS[token][0];
			return true;

		}),
		byJobRoleState: (candidates, state = "") => candidates,
		byHiringStatus: (candidates, status = []) => candidates,
		byTestsScore: (candidates, score = 0) => candidates,
		byCriteria: (candidates, criteria = {}) => candidates,
	},
	filterFields: (candidates, fields) => {
		fields = fields ? fields.reduce((fieldsMap, field) => (fieldsMap[field] = true) && fieldsMap, {}) : {
			firstName: true,
			secondName: true,
		};

		candidates.forEach(candidate => {
			if (!fields.firstName) delete candidate.firstName;
			if (!fields.secondName) delete candidate.secondName;
			if (!fields.email) delete candidate.email;
			if (!fields.phone) delete candidate.phone;
			if (!fields.experience) delete candidate.experience;
			if (!fields.linksToProfile) delete candidate.linksToProfile;
			if (!fields.invitedBy) delete candidate.invitedBy;
		});

		return candidates;
	}
};