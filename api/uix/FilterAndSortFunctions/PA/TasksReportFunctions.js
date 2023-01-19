let filterByTaskIds = (data, value) => {
	return data.filter(item => {
		return value.indexOf(item.taskId) > -1;
	});
};

let filterByCandidateIds = (data, value) => data.filter(task => value.includes(task.candidateId));
let filterByOrigin = (data, value) => data.filter(task => task.origin === value);

const FilterTasksReportFunctions = {
	taskIds: filterByTaskIds,
	candidateIds: filterByCandidateIds,
	origin: filterByOrigin
};


const TasksReportFunctions = {
	filter: FilterTasksReportFunctions
};

module.exports = TasksReportFunctions;