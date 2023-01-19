const AbstractRouter = require('./AbstractRouter');

module.exports = {
    benchmark: {
        timeless: {
            industry: new AbstractRouter('benchmark/timeless/industry/', 'industry'),
            fileType: new AbstractRouter('benchmark/timeless/fileType/', 'fileType'),
            employee_type: new AbstractRouter('benchmark/timeless/employee_type/', 'employee_type'),
            bouniverse: new AbstractRouter('benchmark/timeless/bouniverse/', 'bouniverse'),
            timezones: new AbstractRouter('benchmark/timeless/timezones/', 'timezones'),
        },
        timed: {
            organization: new AbstractRouter('benchmark/timed/organization/', 'organization'),
        },
        reports: new AbstractRouter('benchmark/reports/', 'reports'),
        organization: {
            summary: new AbstractRouter('benchmark/organization/summary/', 'summary'),
        },
    },
    benchmarkReports: new AbstractRouter('benchmark/reports/', 'reports'),
    benchmarkConstituents: new AbstractRouter('benchmark/constituents/', 'constituents'),
};
