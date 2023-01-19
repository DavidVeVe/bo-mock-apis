const DiscoveredDsFunctions = require('./FilterAndSortFunctions/DiscoveredDsFunctions');
const OverviewFunctions = require('./FilterAndSortFunctions/OverviewFunctions');
const AbstractFilePath = require('./AbstractFilePath');
const configureDataSourcesFunctions = require("./FilterAndSortFunctions/configureDataSources");
const FilePathBuffer = require("./FilePathBuffer");

/**
 * getDataSourcesFilteringQuery
 * @description Based on the query parameters, returns an object with the fields used to filter
 * @param query {Object}
 * @return {Object}
 */
let getDataSourcesFilteringQuery = (query) => {
	return {
		organizationIds: query.organizationIds,
		projectName: query.projectName,
		collectionName: query.collectionName,
		hostUrl: query.hostUrl,
		instanceUrl: query.instanceUrl,
		instanceName: query.instanceName,
		infraType: query.infraType,
		status: query.status,
		infraTypeIds: query.infraTypeIds
	};
};

let getTasksFilteringQuery = (body) => {
	let filter = {};
	if (body.filter) {
		filter.taskIds = body.filter.taskIds;
		filter.candidateIds = body.filter.candidateIds;
		filter.origin = body.filter.origin;
	}
	return filter;
};

let getJobRolesFilteringQuery = (body) => {
	let filter = {};
	if (body.filter) {
		filter.paJobRoleIds = body.filter.paJobRoleIds;
	}
	return filter;
};

let getDCHFilter = body => {
	let filter = {};
	if (body.runResult) filter.byRunResult = body.runResult;
	return filter;
};

let getAAFilter = body => {
	let filter = {};
	if (body.type) filter.byType = body.type;
	if (body.collectionIds) filter.byCollection = body.collectionIds;
	return filter;
};

let getAAV2Filter = body => {
	let filter = {};
	if (body.category) filter = { ...filter, category: body.category };
	if (body.status) filter = { ...filter, status: body.status };
	return filter;
};

let getTestsFilter = body => {
	let filter = {};
	filter.byAggregationLevel = body.aggregationLevel;
	if (body.filterByCandidateIds) filter.byCandidateIds = body.filterByCandidateIds;
	if (body.filterByPaJobRoleIds) filter.byPaJobRoleIds = body.filterByPaJobRoleIds;

	return filter;
};

let getCandidatesFilter = body => {
	return {
		byCandidateIds: body.filter.candidate.ids ? body.filter.candidate.ids : null,
		byCandidateName: body.filter.candidate.name ? body.filter.candidate.name : null,
		byType: body.filter.candidate.type ? body.filter.candidate.type : null,
		byJobRoleState: body.filter.jobRole && body.filter.jobRole.state ? body.filter.jobRole.state : null,
		byHiringStatus: body.filter.jobRole && body.filter.jobRole.hiringStatus ? body.filter.jobRole.hiringStatus : null,
		byTestsScore: body.filter.tests && body.filter.tests.minScore ? body.filter.tests.minScore : null,
		byCriteria: body.filter.tests && body.filter.tests.criteria ? body.filter.tests.criteria : null,
	}

};
/**
 * parseQueryDataForFiltering
 * @description Depending on the prefix, calls the correct method to parse filtering object.
 * @param prefix {String} prefix of file to be served
 * @param body {Object} request body
 * @return {Object}
 */
let parseBodyDataForFiltering = (prefix, body) => {
	switch (prefix) {
		case 'dataSourcesStats-post':
		case 'dataSources-post':
			return getDataSourcesFilteringQuery(body);
		case 'tasks-statistic-post':
		case 'tasks-report-post':
			return getTasksFilteringQuery(body);
		case 'jobRoles-post':
			return getJobRolesFilteringQuery(body);
		case "dataCollectionHistory-post":
			return getDCHFilter(body);
		case "alerts-post":
			return getAAFilter(body);
		case "filter-tests-post":
			return getTestsFilter(body);
		case "candidates-filter-post":
			return getCandidatesFilter(body);
		case "ListDataSources-post":
		case "healthDataSources-post":
			return configureDataSourcesFunctions.getFilters(body);
		case "alertsV2-post":
			return getAAV2Filter(body);
	}
};

/**
 * parseQueryDataFromRoute
 * @description Depending on the route, calls the correct method to parse filtering object.
 * @param prefix {String} route of file to be served
 * @param query {Object} request query
 * @return {Object}
 */
let parseQueryDataFromRoute = (route) => {

		switch (route) {
				case "/api/v2/analysis/overview/timeless/combined/employers":
						return "filterTimelessCombinedEmployer";
				case "/api/v2/analysis/overview/monthlyTrend/employers":
						return "filterMonthlyTrendEmployer";
				case "/api/v2/analysis/overview/breakdownByFileType/detailed/employers":
						return "filterBreakdownByFileTypeEmployer";
				case "/api/v2/analysis/overview/attritionInTheCodebase/detailed/employers":
						return "filterAttritionInTheCodebaseTypeEmployer";
		}
};

/**
 * filterElements
 * @description Based on the requested file, filters the data with the params values.
 * @param data {Array}
 * @param params {Object}
 * @param route {String}
 * @return {Array}
 */
let filterElements = (data, query, body, prefix, route, token, originalUrl) => {
	
	if (body.filters && (prefix === 'dataSources-post' || prefix === 'dataSourcesStats-post')) {
		Object.keys(body.filters).forEach((filter) => {
			body[filter] = body.filters[filter]
		})
		delete(body.filters)
	}
	
	let filterParams = parseBodyDataForFiltering(prefix, body);
	let filterFromRoute = parseQueryDataFromRoute(route);
	let functions = null;

	switch (prefix) {
		case 'dataSourcesStats-post':
				functions = require("./FilterAndSortFunctions/DiscoveredDsStatsFunctions");
				return functions.filterAndCalculating(data, filterParams, originalUrl);
				break;
		case 'dataSources-post':
				functions = DiscoveredDsFunctions;
				break;
		case 'tasks-statistic-post':
				functions = require('./FilterAndSortFunctions/PA/TasksStatisticFunctions');
				break;
		case 'tasks-report-post':
				functions = require('./FilterAndSortFunctions/PA/TasksReportFunctions');
				break;
		case 'jobRoles-post':
			functions = require("./FilterAndSortFunctions/PA/JobRolesFunctions");
			break;
		case 'developers-post':
				functions = OverviewFunctions;
				break;
		case 'employers-post':
			functions = OverviewFunctions;
			break;
		case "dataCollectionHistory-post":
			functions = require("./FilterAndSortFunctions/DCHFunctions");
			break;
		case "alerts-post":
			functions = require("./FilterAndSortFunctions/ActiveAlerts");
			break;
		case "filter-tests-post":
			functions = require("./FilterAndSortFunctions/PA/Tests");
			break;
		case "candidates-filter-post":
			functions = require("./FilterAndSortFunctions/PA/Candidates");
			break;
		case "ListDataSources-post":
			functions = configureDataSourcesFunctions;
			break;
		case "alertsV2-post":
			functions = require("./FilterAndSortFunctions/ActiveAlertsV2");
			break;
	}
	
	if (functions) {
			if (filterParams) {
					Object.keys(filterParams).forEach((key) => {
							if (filterParams[key]) {
									data = functions.filter[key](data, filterParams[key], token);
							}
					});
					return data;
			}

			if(filterFromRoute) {
					return functions[filterFromRoute](data, body);
			}

		if (typeof functions.filter === "function") {
			return functions.filter(data, body);
		}
	}
	
	return data;
};

/**
 * getLimitAndOffset
 * @description Based on the requested params, truncates the data with the desired limit and offset
 * @param data {Array}
 * @param params {Object}
 * @return {Array}
 */
let getLimitAndOffset = (data, params, body, prefix) => {
	switch (prefix) {
		case 'dataSourcesStats-post':
			break;
		case 'alerts-post':{
			let offset = body.offset;
			let limit = body.limit;
			data.activeAlerts = data.activeAlerts.splice(offset, limit);

			return data;
		}
		case 'alertsV2-post':{
			let offset = body.offset;
			let limit = body.limit;
			data.activeAlerts = data.activeAlerts.splice(offset, limit);

			return data;
		}

		case "activeAlertsCounters-post":
			break;

		default:
			let offset = params.offset || body.offset;
			if (offset) {
				data = data.splice(offset);
			}
			let limit = params.limit || body.limit;
			if (limit) {
				data = data.splice(0, limit);
			}
			break;
	}

	return data;
};

/**
 * sortBy
 * @description Based on the requested params, sorts data.
 * @param data {Array}
 * @param params {Object}
 * @return {Array}
 */
let sortBy = (data, params, body, prefix) => {
	let functions = null;
	switch (prefix) {
		case 'dataSources-post':
			functions = DiscoveredDsFunctions;
			break;

		case 'dataCollectionHistory-post':
			functions = require("./FilterAndSortFunctions/DCHFunctions");
			break;

		case "ListDataSources-post":
			functions = configureDataSourcesFunctions;
			break;
	}

	const sortingColumn = params.sortingColumn || body.sortingColumn;
	const mode = params.sortingMode || body.sortingMode;

	if (functions) {
		if (sortingColumn) {
			data = functions.sort[sortingColumn](data);
		}

		if (mode === 'ascend') {
			data = data.reverse();
		}
	}

	return data;
};

let filterFields = (data, body, prefix) => {
	let functions = null;
	switch (prefix) {
		case 'tasks-statistic-post':
			functions = require("./FilterAndSortFunctions/PA/TasksStatisticFunctions");
			break;

		case "filter-tests-post":
			functions = require("./FilterAndSortFunctions/PA/Tests");
	}
	if (functions) {
		data = functions.filterFields(data, body.fields);
	}

	return data;
};

let processRequest = (data, params, body, prefix, token, files) => {
	let functions = null;
	switch (prefix) {
		case "candidate-post":
			functions = require("./processRequestFunctions/paCandidatesEdit");
			break;

		case "split-post":
			functions = require("./processRequestFunctions/processSplitRequests");
			break;

		case "counters-post":
			functions = require("./processRequestFunctions/DCHCounters");
			break;

		case "alert-post":
			functions = require("./processRequestFunctions/ActiveAlerts").particularAlert;
			break;

		case "activeAlertsCounters-post":
			functions = require("./processRequestFunctions/ActiveAlerts").total;
			break;

		case "candidatesCounters-post":
			functions = require("./processRequestFunctions/Candidates");
			break;

		case"validate-post":
			functions = require("./processRequestFunctions/InviteCandidatesCSV");
			break;

		case "csv-dataSources-post":
			functions = configureDataSourcesFunctions.csv;
			break;

		case "status-dataSources-post":
			functions = configureDataSourcesFunctions.statuses;
			break;

		case "counters-dataSources-post":
			functions = configureDataSourcesFunctions.counters;
			break;

		case "filters-DataSources-post":
			functions = configureDataSourcesFunctions.availableFilters;
			break;

		case "healthDataSources-post":
			functions = configureDataSourcesFunctions.healthIndicator;
			break;

		case "delete-dataSources-post":
			functions = configureDataSourcesFunctions.delete;

	}

	if (functions) data = functions.process(data, body, params, token, files);

	return data;
};

let resetData = prefix => {
	switch (prefix) {
		case "dataCollectionHistory-post":{
			const filePath = FilePathBuffer.paths.dataCollectionHistory.self.getInitialPostFilePath();
			const resetData = FilePathBuffer.paths.dataCollectionHistory.self.getResetPostFile();
			AbstractFilePath.writeFileSync(filePath, resetData);
			break;
		}

		case "alerts-post":{
			const filePath = FilePathBuffer.paths.alerts.getInitialPostFilePath();
			const resetData = FilePathBuffer.paths.alerts.getResetPostFile();
			AbstractFilePath.writeFileSync(filePath, resetData);
			break;
		}

		case "ListDataSources-post":{
			const filePath = FilePathBuffer.paths.dataSources.self.getInitialPostFilePath();
			const resetData = FilePathBuffer.paths.dataSources.self.getResetPostFile();
			AbstractFilePath.writeFileSync(filePath, resetData);
			break;
		}
	}
};

let processGet = (data, params, prefix, idPrefix) => {
	let functions;
	switch (prefix) {
		case "alert-get":
			functions = require("./processRequestFunctions/ActiveAlerts").particularAlert;
			break;
		case "test-get":
			functions = require("./processRequestFunctions/paProcessGet").getTest;
			break;
		case "jobRole-get":
			functions = require("./processRequestFunctions/paProcessGet").getJobRole;
			break;
		case "candidate-get":
			functions = require("./processRequestFunctions/paProcessGet").getCandidate;
			break;
		case "jobRoles-get":
			functions = require("./processRequestFunctions/paProcessGet").getJobRoles;
			break;
		case "tasks-get":
			functions = require("./processRequestFunctions/paProcessGet").getTask;
			break;
		case "particular-dataSource-get":
			functions = configureDataSourcesFunctions;
			break;
		case "get-particular-collection-get":
			functions = require("./processRequestFunctions/processGet").collections;
			break;
		case "get-particular-project-get":
			functions = require("./processRequestFunctions/processGet").projects;
			break;
	}

	if (functions) {
		data = functions.processGet(params, data);
		if (data) return data;
		return false;
	}
	return data || false;
};

let processDelete = (data, params, prefix) => {
	let functions;
	switch (prefix) {
		case "particular-dataSource-delete":
			functions = configureDataSourcesFunctions;
			break;
	}

	if (functions) {
		data = functions.processDelete(params, data);
		if (data) return data;
		return false;
	}
	return data || false;

};

let getCustomFilePath = (params, prefix) => {
	switch (prefix) {
		case "pa-tasks-files-get":
			const filesPath = AbstractFilePath.getFilePath("pa/admin/files");
			const fileForTask = AbstractFilePath.fileExistsSync(`${filesPath}\\${params.taskId}\\${params.fileName}`);
			const defaultFile = AbstractFilePath.fileExistsSync(`${filesPath}\\${params.fileName}`);

			if (fileForTask || defaultFile) {
				return fileForTask || defaultFile;
			}

			break;
	}
};

let isJson = fileName => new RegExp(/(?:\.([^.]+))?$/).exec(fileName)[1] === "json";

const Helpers = {
	filterElements: filterElements,
	getLimitAndOffset: getLimitAndOffset,
	sortBy: sortBy,
	filterFields: filterFields,
	processRequest,
	resetData,
	processGet,
	getCustomFilePath,
	isJson,
	processDelete
};

module.exports = Helpers;
