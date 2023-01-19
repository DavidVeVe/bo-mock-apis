const filesBuffer = require("../FilePathBuffer");

module.exports = {
	collections: {
		processGet: params => filesBuffer.paths.collections.list.getInitialGetFile().find(collection => collection.id === +params.id)
	},
	projects: {
		processGet: params => filesBuffer.paths.projects.list.getInitialGetFile().find(project => project.id === +params.id)
	}
};