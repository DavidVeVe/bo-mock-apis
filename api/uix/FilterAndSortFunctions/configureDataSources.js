const FilePathBuffer = require("../FilePathBuffer");
const AbstractFilePath = require("../AbstractFilePath");
const buffer = {};

const functions = {
	getFilters: body => {
		const filter = {};

        if (!body || !body.filters) {
            return filter;
        }

		if (body.filters.instanceUrl) filter.filterByInstanceUrl = body.filters.instanceUrl;
		if (body.filters.instanceName) filter.filterByInstanceName = body.filters.instanceName;
		if (body.filters.schedule) filter.filterBySchedule = body.filters.schedule;
		if (body.filters.lastUpdateBy) filter.filterByLastUpdateBy = body.filters.lastUpdateBy;
		if (body.filters.lastUpdate) filter.filterByLastUpdate = body.filters.lastUpdate;
		if (body.filters.createdBy) filter.filterByCreatedBy = body.filters.createdBy;
		if (body.filters.status) filter.filterByStatus = body.filters.status;
		if (body.filters.errorCode) filter.filterByErrorCode = body.filters.errorCode;
		if (body.filters.organizationIds) filter.filterByOrganizationIds = body.filters.organizationIds;
		if (body.filters.projectIds) filter.filterByProjectIds = body.filters.projectIds;
		if (body.filters.collectionIds) filter.filterByCollectionIds = body.filters.collectionIds;
		if (body.filters.projectName) filter.filterByProjectName = body.filters.projectName;
		if (body.filters.collectionName) filter.filterByCollectionName = body.filters.collectionName;
		if (body.filters.integratorIds) filter.filterByIntegratorIds = body.filters.integratorIds;
		if (body.filters.infraTypeIds) filter.filterByInfraTypeIds = body.filters.infraTypeIds;

		return filter;
	},
	applyFilters: filters => {
		let DSList = FilePathBuffer.paths.dataSources.self.getInitialPostFile();
		for (const filterName in filters) {
			if (filters.hasOwnProperty(filterName)) {
				const filter = filters[filterName];
				DSList = functions.filter[filterName](DSList, filter);
			}
		}
		return DSList;
	},
	filter: {
		filterByInstanceUrl: (dataSources, instanceUrl) => dataSources.filter(dataSource => dataSource.instance.url.includes(instanceUrl)),
		filterByInstanceName: (dataSources, instanceName) => dataSources.filter(dataSource => dataSource.instance.name.includes(instanceName)),
		filterBySchedule: (dataSources, schedule) => dataSources.filter(dataSource => isSchedule(dataSource, schedule)),
		filterByLastUpdateBy: (dataSources, lastUpdatedBy) => dataSources.filter(dataSource => dataSource.lastUpdate.user.includes(lastUpdatedBy)),
		filterByLastUpdate: (dataSources, lastUpdate) => dataSources.filter(dataSource => dataSource.lastUpdate.date.includes(lastUpdate)),
		filterByCreatedBy: (dataSources, createdBy) => dataSources.filter(dataSource => dataSource.created.user.includes(createdBy)),
		filterByStatus: (dataSources, status) => dataSources.filter(dataSource => isDSStatusEqualTo(dataSource, status)),
		filterByErrorCode: (dataSources, errorCode) => dataSources.filter(dataSource => getDataSourceStatus(dataSource).errorCode === errorCode),
		filterByOrganizationIds: (dataSources, organizationIds) => dataSources.filter(dataSource => organizationIds.includes(getOrganization(dataSource).id)),
		filterByProjectIds: (dataSources, projectIds) => dataSources.filter(dataSource => projectIds.includes(getProject(dataSource).id)),
		filterByCollectionIds: (dataSources, collectionIds) => dataSources.filter(dataSource => collectionIds.includes(dataSource.collectionId)),
		filterByProjectName: (dataSources, projectName) => dataSources.filter(dataSource => getProject(dataSource).name.includes(projectName)),
		filterByCollectionName: (dataSources, collectionName) => dataSources.filter(dataSource => getCollection(dataSource).name.includes(collectionName)),
		filterByIntegratorIds: (dataSources, integratorIds) => dataSources.filter(dataSource => integratorIds.includes(dataSource.integratorId)),
		filterByInfraTypeIds: (dataSources, infraTypeIds) => dataSources.filter(dataSource => infraTypeIds.includes(dataSource.infraType.id)),
		filterByDataSourceIds: (dataSources, dataSourceIds) => dataSources.filter(dataSource => dataSourceIds.includes(dataSource.dataSourceId))
	},
	sort: {
		organization: data => data,
		project: data => data,
		collection: data => data,
		infraType: data => data,
		instanceUrl: data => data,
		instanceName: data => data,
		componentName: data => data,
		integrator: data => data,
		scheduleIntervalPeriod: data => data,
		scheduleStartDate: data => data,
		createdBy: data => data,
		createdOn: data => data,
		lastUpdateBy: data => data,
		updatedOn: data => data,
		status: data => data.sort((dataSource1, dataSource2) => {
			const dataSource1Status = statuses[getDataSourceStatus(dataSource1).color];
			const dataSource2Status = statuses[getDataSourceStatus(dataSource2).color];

			return dataSource1Status > dataSource2Status ? 1 : dataSource1Status < dataSource2Status ? -1 : 0;
		}),
		requestsCount: data => data,
		health: data => data,
		firstExtractionDate: data => data,
		lastExtractionDate: data => data,
		lastValidationDate: data => data,
		errorCode: data => data,

	},
	processGet: params => {
		const DSList = FilePathBuffer.paths.dataSources.self.getInitialPostFile();
		const id = +params.id;

		return DSList.find(ds => ds.dataSourceId === id);
	},
	processDelete: (params, data) => {
		const dataSources = functions.applyFilters({filterByDataSourceIds: [+params.id]});
		if (dataSources.length) {
			const dataSource = dataSources[0];
			const path = FilePathBuffer.paths.dataSources.self.getInitialPostFilePath();
			const DSList = FilePathBuffer.paths.dataSources.self.getInitialPostFile();

			const index = DSList.findIndex(dsFromList => dsFromList.dataSourceId === dataSource.dataSourceId);
			if (index !== -1) {
				DSList.splice(index, 1);
				data.dataSourceIds.push(dataSource.dataSourceId);

				AbstractFilePath.writeFileSync(path, DSList);
			}
		}

	},
	csv: {
		process: data => {
			data.url = AbstractFilePath.getFilePath("dataSources/csv/csv-dataSources.csv");
			return data;
		}
	},
	counters: {
		process: (data, body) => {
			const filteredDS = functions.applyFilters(functions.getFilters(body));
			if (body.status) {
				data[loverCaseStatuses[body.status]] = filteredDS.length;

			} else {
				filteredDS.forEach(ds => {
					const status = loverCaseStatuses[getDataSourceStatus(ds).color];
					data[status] += 1;
				})

			}

			return data;
		}
	},
	statuses: {
		process: (data, body) => {
			const filteredDS = functions.applyFilters(functions.getFilters(body));
			const ids = filteredDS.map(ds => ds.dataSourceId);
			return FilePathBuffer.paths.status.dataSources.getInitialGetFile().filter(status => ids.includes(status.id))
		}
	},
	availableFilters: {
		process: (data, body) => {
			const filteredDS = functions.applyFilters(functions.getFilters(body));
			const addedIntervals = {};
			const addedInfraTypes = {};
			const addedIntegratorIds = {};
			const addedOrganizationIds = {};
			const addedStatuses = {};

			for (let i = 0, length = filteredDS.length; i < length; i++) {
				const ds = filteredDS[i];
				const dsInfraTypeId = ds.infraType.id;
				const dsIntegratorId = ds.integratorId;
				const dsScheduleInterval = ds.schedule && ds.schedule.interval;
				const dsScheduleIntervalValue = dsScheduleInterval && dsScheduleInterval.value + dsScheduleInterval.period;
				const dsOrganizationId = getOrganization(ds).id;
				const dsStatus = statuses[getDataSourceStatus(ds).color];

				if (!addedInfraTypes[dsInfraTypeId]) {
					data.infraTypes.push(dsInfraTypeId);
					addedInfraTypes[dsInfraTypeId] = true;

				}
				if (!addedIntegratorIds[dsIntegratorId]) {
					data.integratorIds.push(dsIntegratorId);
					addedIntegratorIds[dsIntegratorId] = true;

				}
				if (dsScheduleInterval !== null && !addedIntervals[dsScheduleIntervalValue]) {
					data.scheduleIntervals.push(dsScheduleInterval);
					addedIntervals[dsScheduleIntervalValue] = true;

				}
				if (!addedOrganizationIds[dsOrganizationId]) {
					data.organizationIds.push(dsOrganizationId);
					addedOrganizationIds[dsOrganizationId] = true;

				}
				if (!addedStatuses[dsStatus]) {
					data.statuses.push(dsStatus);
					addedStatuses[dsStatus] = true;

				}
			}


			return data;
		}
	},
	healthIndicator: {
		process: (data, body) => {
			const filteredDS = functions.applyFilters(functions.getFilters(body)).map(ds => ds.dataSourceId);
			return data.filter(indicator => filteredDS.includes(indicator.dataSourceId));
		}
	},
	delete: {
		process: (data, body) => {
			let dataSources;
			if (body.dataSourceIds) {
				dataSources = functions.applyFilters({filterByDataSourceIds: body.dataSourceIds.map(id => +id)});

			} else {
				dataSources = functions.applyFilters(functions.getFilters(body));

			}

			if (dataSources.length) {
				const path = FilePathBuffer.paths.dataSources.self.getInitialPostFilePath();
				const DSList = FilePathBuffer.paths.dataSources.self.getInitialPostFile();
				dataSources.forEach(dataSource => {
					const index = DSList.findIndex(dsFromList => dsFromList.dataSourceId === dataSource.dataSourceId);
					if (index !== -1) {
						DSList.splice(index, 1);
						data.dataSourceIds.push(dataSource.dataSourceId);
					}
				});

				AbstractFilePath.writeFileSync(path, DSList);
			}

			return data;
		}
	}
};

module.exports = functions;

const statuses = {
	"null": "Not Validated", // color null
	"green": "Validated", // color green
	"red": "Error", // color red
	"amber": "Validation Failed", // color amber
	"blue": "Detached", // color blue
};

const loverCaseStatuses = {
	null: "notValidated",
	green: "validated",
	red: "error",
	amber: "integratorOffline",
	blue: "detached",
	"Not Validated": "notValidated",
	"Validated": "validated",
	"Error": "error",
	"Integrator Offline": "integratorOffline",
	"Validation Failed": "integratorOffline",
	"Detached": "detached",
};

const getDataSourceStatus = dataSource => {
	if (!buffer.statuses) {
		buffer.statuses = FilePathBuffer.paths.status.dataSources.getInitialGetFile().reduce((map, dsStatus) => {
			map[dsStatus.id] = dsStatus;
			return map;

		}, {});
	}

	const status = buffer.statuses[dataSource.dataSourceId];

	return status;
};

const getCollection = dataSource => {
	if (!buffer.collections) {
		buffer.collections = FilePathBuffer.paths.collections.list.getInitialGetFile().reduce((map, collection) => {
			map[collection.id] = collection;
			return map;

		}, {});
	}

	const collectionId = dataSource.collectionId;
	const collection = buffer.collections[collectionId];

	return collection;
};


const getProject = dataSource => {
	if (!buffer.projects) {
		buffer.projects = FilePathBuffer.paths.projects.list.getInitialGetFile().reduce((map, project) => {
			map[project.id] = project;
			return map;

		}, {});
	}

	const collection = getCollection(dataSource);
	const project = buffer.projects[collection.projectId];

	return project;

};
const getOrganization = dataSource => {
	if (!buffer.organizations) {
		buffer.organizations = FilePathBuffer.paths.organizations.getInitialGetFile().reduce((map, organization) => {
			map[organization.id] = organization;
			return map;

		}, {});
	}

	const project = getProject(dataSource);
	const org = buffer.organizations[project.organizationId];

	return org;
};

const isSchedule = (dataSource, schedule) => {
	if (dataSource.schedule) {
		return dataSource.schedule.interval.period === schedule.interval.period && dataSource.schedule.interval.value === schedule.interval.value
	}
	return false;
};

const isDSStatusEqualTo = (dataSource, status) => {
	const DSStatus = statuses[getDataSourceStatus(dataSource).color];
	const equal = DSStatus === status;
	return equal;
};