/**
 * Created by ulloaen on 13/04/2020
 */

const AbstractRouter = require('./AbstractRouter');

module.exports = {
    userPreferences: {
        dataSources: new AbstractRouter('userPreferences/dataSources/', 'userPreferencesDataSources'),
        dataCollectionHistory: new AbstractRouter('userPreferences/dataCollectionHistory/', 'dataCollectionHistory'),
        discoveredDataSources: new AbstractRouter('userPreferences/discoveredDataSources/', 'discoveredDataSources'),
        manageUsers: new AbstractRouter('userPreferences/manageUsers/', 'manageUsers'),
        manageDevelopers: new AbstractRouter('userPreferences/manageDevelopers/', 'manageDevelopers')
    }
};