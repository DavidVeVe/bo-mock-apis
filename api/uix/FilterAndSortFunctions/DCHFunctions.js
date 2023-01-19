const functions = {
	filter: {
		byRunResult: (data, filter) => data.filter(request => request.runResult.status === filter)
	},
	sort: {}
};

module.exports = {
	filter: functions.filter,
	sort: new Proxy(functions.sort, {
		get(target, prop) {
			return sortFunction.bind(null, prop)
		}
	})
};

const sortFunction = (sortBy, data) => {
	if (data[0][sortBy]) {
		return data.sort((request1, request2) => {
			const less = request1[sortBy] > request2[sortBy];
			const equal = request1[sortBy] === request2[sortBy];
			const bigger = request1[sortBy] < request2[sortBy];

			if (less) return -1;
			if (equal) return 0;
			if (bigger) return 1;
		})
	} else {
		return data;
	}
};