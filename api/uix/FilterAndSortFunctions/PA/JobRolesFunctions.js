let filterByJobRoleIds = (data, value) => {
	return data.filter(item => {
		return value.indexOf(item.id) > -1;
	});
};

let filterFields = (data, fields) => {
	if (fields) {
		data = data.map((item) => {
			let newItem = {
				id: item.id
			};

			fields.forEach((field) => {
				newItem[field] = item[field];
			});
			return newItem;
		});
	} else {
		data = data.map((item) => {
			let newItem = {
				id: item.id,
				numberOfCandidates: item.numberOfCandidates
			};

			return newItem;
		})
	}
	return data
};

const FilterJobRolesFunctions = {
	paJobRoleIds: filterByJobRoleIds,
};


const JobRolesFunctions = {
	filter: FilterJobRolesFunctions,
	filterFields: filterFields
};

module.exports = JobRolesFunctions;