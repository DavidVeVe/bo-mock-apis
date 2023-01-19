/**
 * Created by ulloaen on 13/04/2020
 */

const AbstractRouter = require('./AbstractRouter');

module.exports = {
    dataSources: {
        add: new AbstractRouter('dataSources/add/', 'add-dataSource'),
        updateFew: new AbstractRouter('dataSources/update/', 'update-dataSources'),
        update: new AbstractRouter('dataSources/update/', 'update-dataSource'),
        deleteFew: new AbstractRouter('dataSources/delete/', 'delete-dataSources'),
        validateUrl: new AbstractRouter('dataSources/validate/', 'validateUrl-dataSource'),
        validateDS: new AbstractRouter('dataSources/validate/', 'revalidate-dataSource'),
        health: new AbstractRouter('health/dataSources/', 'healthDataSources'),
        self: new AbstractRouter('dataSources/', 'ListDataSources'),
        availableFilters: new AbstractRouter('dataSources/availableFilters/', 'filters-DataSources'),
        getParticularDataSource: new AbstractRouter('dataSources/', 'particular-dataSource'),
        csv: new AbstractRouter('dataSources/csv/', 'csv-dataSources'),
        counters: new AbstractRouter('dataSources/counters/', 'counters-dataSources'),
        infraTypes: new AbstractRouter('dataSources/infraTypes/', 'list-infraTypes'),
        one: new AbstractRouter('dataSources/', 'one')
    }
};