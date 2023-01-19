const filesBuffer = require('../FilePathBuffer');
module.exports = {
	process: counters => {
		const DCH = filesBuffer.paths.dataCollectionHistory.self.getInitialPostFile();
		return DCH.reduce((counters, request) => {
			if(request.runResult && request.runResult.status) {
				if (counters.hasOwnProperty(request.runResult.status)) {
					counters[request.runResult.status] += 1;
				}
			}
			return counters;
		}, counters)
	}
};