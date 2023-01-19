const AbstractRouter = require('./AbstractRouter');

module.exports = {
    autoDiscoveryDataSources: new AbstractRouter('autodiscovery/', 'dataSources'),
    autoDiscoveryAvailableFilters: new AbstractRouter('autodiscovery/', 'ddsAvailableFilters'),
    autoDiscoveryDataSourcesStats: new AbstractRouter('autodiscovery/', 'dataSourcesStats'),
    autoDiscoveryDsPendingForSync: new AbstractRouter('autodiscovery/', 'dsPendingForSync'),
    autoDiscoveryStateDataSources: new AbstractRouter('autodiscovery/', 'stateDataSources'),
    autoDiscoveryExportDataSources: new AbstractRouter('autodiscovery/', 'export'),
    autoDiscoveryautoOnboardEnabled: new AbstractRouter('autodiscovery/', 'autoOnboardEnabled'),
    autoDiscoveryOnboard: new AbstractRouter('autodiscovery/', 'onboard'),
    autoDiscoveryIgnore: new AbstractRouter('autodiscovery/', 'ignore'),
    autoDiscoveryUnignore: new AbstractRouter('autodiscovery/', 'unignore'),
    progressStatus: new AbstractRouter('autodiscovery/', 'progressStatus'),
};
