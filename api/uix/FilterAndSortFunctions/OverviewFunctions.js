
let filterElements = function(filterBy, data, filter) {
    let filteredItems = {};

    for (let key in data) {
        if (data[key][filterBy]) {
            let exist = data[key][filterBy].some(elementId => {
                return filter[filterBy].indexOf(parseInt(elementId, 10)) > -1;
            }) ? data[key] : null;

            if(exist) {
                filteredItems[key] = exist;
            }
        } else {
            return data;
        }

    }

    return filteredItems;
};

// Filter functions
let filterByAllFields = function(data, filter){
    let filteredItems = data;
    if(filter.locationIds) {
        filteredItems = filterElements("locationIds", filteredItems, filter);
    }

    if(filter.employerIds) {
        filteredItems = filterElements("employerIds", filteredItems, filter);
    }

    return filteredItems;
};

let getCounters = function(data, filter, counterId) {
    // Filter the data
    let filteredData = filterByAllFields(data, filter);
    let ids = [] ;
    for (let devId in filteredData) {
        ids.push(filteredData[devId][counterId]);
    }

    // Get counters
    ids = ids.reduce((acc, val) => acc.concat(val), []);// Flat array
    return ids.reduce(function(counter, id) {
        counter[id] = ++counter[id] || 1;
        return counter;
    }, {});
};

let filterTimelessCombinedEmployer = function(data, filter) {

    let employersCountersById = getCounters(data, filter,"employerIds");

    // Create response
    let employers = {};
    filter.employerIds.forEach(id => {
        employers[id] = {
            "metrics": {
                "": 12.0,
                "avg_bce": 0.82
            },
            "totalDevelopers": employersCountersById[id]
        };
    });

    return employers;
};

let filterMonthlyTrendEmployer = function(data) {
    return data;
};

let filterBreakdownByFileTypeEmployer = function(data, filter) {
    let employersCountersById = getCounters(data, filter,"employerIds");

    // Create response
    let employers = {};
    filter.employerIds.forEach(id => {
        employers[id] = {
            "fileTypes": {
                "scala": {
                    "metrics": {
                        "bce": 3.54
                    },
                    "totalDevelopers": 1
                }
            },
            "totalDevelopers": employersCountersById[id]
        };
    });

    return employers;
};

let filterAttritionInTheCodebaseTypeEmployer = function(data, filter) {
    let employersCountersById = getCounters(data, filter,"employerIds");

    // Create response
    let employers = {};
    filter.employerIds.forEach(id => {
        employers[id] = {
            "inactive": {
                "metrics": {
                    "bce": 3.54
                },
                "totalDevelopers": employersCountersById[id]
            }
        };
    });

    return employers;
};

const OverviewFunctions = {
    filter: filterByAllFields,
    filterTimelessCombinedEmployer,
    filterMonthlyTrendEmployer,
    filterBreakdownByFileTypeEmployer,
    filterAttritionInTheCodebaseTypeEmployer
};

module.exports = OverviewFunctions;
