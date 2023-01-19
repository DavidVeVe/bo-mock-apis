/**
 * Created by ulloaen on 13/04/2020
 */
const AbstractRouter = require('./AbstractRouter');

module.exports = {
    adDataSources: new AbstractRouter('ad/', 'dataSources'),
    ddsAvailableFilters: new AbstractRouter('ad/', 'ddsAvailableFilters'),
    adDataSourcesStats: new AbstractRouter('ad/', 'dataSourcesStats'),
    adDsPendingForSync: new AbstractRouter('ad/', 'dsPendingForSync'),
    adStateDataSources: new AbstractRouter('ad/', 'stateDataSources'),
    adExportDataSources: new AbstractRouter('ad/', 'export'),
    autoOnboardEnabled: new AbstractRouter('ad/', 'autoOnboardEnabled'),
    adConfigs: new AbstractRouter('ad/', 'adConfigs'),
    adConfigs3: new AbstractRouter('ad/', 'adConfigs3'),
    infraTypes: new AbstractRouter('ad/', 'infraTypes'),
    integrations: new AbstractRouter('ad/', 'integrations'),
    activeUsers: new AbstractRouter('ad/', 'activeUsers'),
    validate: new AbstractRouter('ad/', 'validate'),
};