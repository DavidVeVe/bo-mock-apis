const AbstractFilePath = require('../AbstractFilePath');

// Filter functions

let filterByInstanceName = (data, value) => {
    return data.filter(ds => {
        return ds.instance.name.indexOf(value) > -1;
    });
};

let filterByInstanceUrl = (data, value) => {
    return data.filter(ds => {
        return ds.instance.url.indexOf(value) > -1;
    });
};

let filterByinfraType = (data, value) => {
    return data.filter(ds => {
        return ds.infraType.infraName.indexOf(value) > -1;
    });
};

const filterByinfraTypeIds = (data, value) => {
    return data.filter((ds) => {
        for (let i = 0 ; i < value.length ; i++){
            if(ds.infraType.infraTypeId === value[i]){
                return ds.infraType.infraTypeId === value[i];
            }
        }
    });
};

let filterByOrganizationIds = (data, value) => {
    return data.filter((ds) => {
        for (let i = 0 ; i < value.length ; i++){
            if(ds.organizationId === value[i]){
                return ds.organizationId === value[i];
            }
        }
    });
};

let filterStatus = (data, value, field) => {
    return data.filter(ds => {
        for (let i = 0; i < value.length; i++) {
            if(ds[field] === value[i]){
                return ds[field] === value[i];
            }
        }

    });
};

let filterFlattenProperty = (data, value, field) => {
    return data.filter(ds => {
        return ds[field] && ds[field].indexOf(value) > -1;
    });
};

let filterByStatus = (data, value) => {
    return filterStatus(data, value, "status");
};

let filterByProjectName = (data, value) => {
    return filterFlattenProperty(data, value, "projectName");
};

let filterByCollectionName = (data, value) => {
    return filterFlattenProperty(data, value, "collectionName");
};

let filterByHostUrl = (data, value) => {
    let filePath = AbstractFilePath.getFilePath('/ad');
    let response =  JSON.parse(AbstractFilePath.readFileSync(`${filePath}/adConfigs-get.json`));
    let hostUrlObj = response.reduce(function (acc, curr) {
        // Add missing hostUrl to dataSources
        acc[curr.adConfigId] = curr.hostUrl;
        return acc;
    }, {});

    return data.filter(ds => {
        let hostUrl = hostUrlObj[ds.adConfigId];
        return hostUrl.indexOf(value) > -1;
    });
};

// Sort functions

let sortFlattenProperty = (data, field) => {
    return data.sort((a, b) => {
        return (a[field] <= b[field]? 1: -1);
    });
};

let sortByOrganizationName = (data) => {
    return sortFlattenProperty(data, "organizationId");
};

let sortByProjectName = (data) => {
    return sortFlattenProperty(data, "projectName");
};

let sortByCollectionName = (data) => {
    return sortFlattenProperty(data, "collectionName");
};

let sortByDiscoveredLogins = (data) => {
    return sortFlattenProperty(data, "totalLogins");
};

let sortByTotalCommits = (data) => {
    return sortFlattenProperty(data, "totalCommits");
};

let sortByDiscoveredOn= (data) => {
    return sortFlattenProperty(data, "discoveredOn");
};

let sortByStatus = (data) => {
    return sortFlattenProperty(data, "status");
};

let sortByInstanceUrl = (data) => {
    return data.sort((a, b) => {
        return (a.instance.url <= b.instance.url? 1: -1);
    });
};

let sortByInstanceName = (data) => {
    return data.sort((a, b) => {
        return (a.instance.name <= b.instance.name? 1: -1);
    });
};

let sortByInfraType = (data) => {
    return data.sort((a, b) => {
        return (a.infraType.infraName <= b.infraType.infraName? 1: -1);
    });
};

let sortByHostUrl = (data) => {
    let filePath = AbstractFilePath.getFilePath('/ad');
    let response =  JSON.parse(AbstractFilePath.readFileSync(`${filePath}/adConfigs-get.json`));
    let hostUrlObj = response.reduce(function (acc, curr) {
        // Add missing hostUrl to dataSources
        acc[curr.adConfigId] = curr.hostUrl;
        return acc;
    }, {});
    return data.sort((a, b) => {
        let hostUrl1 = hostUrlObj[a.adConfigId];
        let hostUrl2 = hostUrlObj[b.adConfigId];
        return (hostUrl1 <= hostUrl2? 1: -1);
    });
};

const FilterDiscoveredDsFunctions = {
    instanceName: filterByInstanceName,
    instanceUrl: filterByInstanceUrl,
    infraType: filterByinfraType,
    organizationIds: filterByOrganizationIds,
    status: filterByStatus,
    projectName: filterByProjectName,
    collectionName: filterByCollectionName,
    hostUrl: filterByHostUrl,
    infraTypeIds: filterByinfraTypeIds
};

const SortDiscoveredDsFunctions = {
    Organization: sortByOrganizationName,
    Project: sortByProjectName,
    Collection: sortByCollectionName,
    DiscoveredLogins: sortByDiscoveredLogins,
    TotalCommits: sortByTotalCommits,
    DiscoveredOn: sortByDiscoveredOn,
    Status: sortByStatus,
    InstanceUrl: sortByInstanceUrl,
    InstanceName: sortByInstanceName,
    InfraType: sortByInfraType,
    HostUrl: sortByHostUrl
};

const DiscoveredDsFunctions = {
    filter: FilterDiscoveredDsFunctions,
    sort: SortDiscoveredDsFunctions
};

module.exports = DiscoveredDsFunctions;
