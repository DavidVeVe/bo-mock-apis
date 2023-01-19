const AbstractFilePath = require('../../../api/uix/AbstractFilePath');
const filesBuffer = require('../FilePathBuffer');
module.exports = {
	process: (split, body) => {
		const numberOfDays = body.numberOfDays;
		const requestIds = body.requestIds;
		const fileName = filesBuffer.paths.dataCollectionHistory.self.getInitialPostFilePath();
		const data = filesBuffer.paths.dataCollectionHistory.self.getInitialPostFile();

		const requests = data.reduce((map, request) => (map[request.requestId] = request) && map, {});

		requestIds.forEach(requestId => {
			const request = requests[requestId];
			if (request) {
				const oldRequest = {
					oldRequestId: requestId,
					splitedRequests: []
				};
				for (let i = 0, length = Math.floor(Math.random() * 10) + 1; i < length; i++) {
					const newRequest = {...request};
					newRequest.requestId = makeid(36);
					oldRequest.splitedRequests.push(newRequest);
					data.unshift(newRequest);
				}
				split.requests.push(oldRequest);

				const index = data.findIndex(request => request.requestId === requestId);
				if (index !== -1) data.splice(index, 1);
			}
		});

		AbstractFilePath.writeFileSync(fileName, data);
		return split;
	}
};

function makeid(length) {
	const addSeparatorOn = [8, 13, 18, 23];
	let result           = '';
	const characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for ( let i = 0; i < length; i++ ) {
		if (addSeparatorOn.includes(i)) {
			result += "-";
		} else {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
	}
	return result;
}