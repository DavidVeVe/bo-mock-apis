/**
 * Created by ulloaen on 13/04/2020
 */
const AbstractRouter = require('./AbstractRouter');
const PATestsRouter = require('./PATestsRouter');

    module.exports = {
    pa: {
        admin: {
            filter: {
                candidates: new AbstractRouter('pa/admin/filter/candidates/', 'candidates-filter'),
                tests: new AbstractRouter('pa/admin/filter/tests/', 'filter-tests'),
            },
            favorites: {
                candidates: new AbstractRouter('pa/admin/favorites/candidates/', 'favorite-candidates'),
                reportsViaEmails: new AbstractRouter('pa/admin/favorites/reportsViaEmails/', 'reportsViaEmails'),
            },
            tests: {
                parentId: {
                    tasks: new AbstractRouter('pa/admin/tests/parentId/tasks/', 'tests/parentId/tasks'),
                    signature: new AbstractRouter('pa/admin/tests/parentId/signature/', 'signature'),
                    encode: new AbstractRouter('pa/admin/tests/parentId/encode/', 'encode'),
                },
                self: new PATestsRouter('pa/admin/tests/', 'tests')
            },
            jobRoles: new AbstractRouter('pa/admin/jobRoles/', 'jobRoles'),
            jobRole: new AbstractRouter('pa/admin/jobRoles/', 'jobRole'),
            test: new AbstractRouter('pa/admin/filter/tests/', 'test'),
            candidates: {
                candidate: new AbstractRouter('pa/admin/filter/candidates/', 'candidate'),
                sample: new AbstractRouter('pa/admin/candidates/sample/', 'sample'),
                validate: new AbstractRouter('pa/admin/candidates/validate/', 'validate'),
                import: new AbstractRouter('pa/admin/candidates/import/', 'import'),
                self: new AbstractRouter('pa/admin/candidates/', 'candidates'),
                id: new AbstractRouter('pa/admin/candidates/', 'candidate'),
                total: new AbstractRouter('counter/', 'candidatesCounters'),
                validateCandidates: new AbstractRouter('pa/admin/candidates/validateCandidates/', 'validateCandidates')
            },
            tasks: new AbstractRouter('pa/admin/tasks/', 'tasks'),
            taskFile: new AbstractRouter('pa/admin/files/', 'pa-tasks-files'),
            mailTo: new AbstractRouter('pa/admin/mailTo/', 'mailTo'),
            searchFields: {
                tasks: new AbstractRouter('pa/admin/searchFields/tasks/', 'tasks'),
                jobRoles: new AbstractRouter('pa/admin/searchFields/jobRoles/', 'jobRoles'),
                candidates: new AbstractRouter('pa/admin/searchFields/candidates/', 'candidates'),
            },
            search: {
                candidates: new AbstractRouter('pa/admin/search/candidates/', 'search-candidates'),
            },
            reports: {
                tasks: new AbstractRouter('pa/admin/reports/tasks/', 'tasks-report'),
            },
            statistic: {
                tasks: new AbstractRouter('pa/admin/statistic/tasks/', 'tasks-statistic'),
                jobRoles: new AbstractRouter('pa/admin/statistic/jobRoles/', 'jobRoles'),
            },
            templates: {
                emails: {
                    invitation: new AbstractRouter('pa/admin/templates/emails/invitation/', 'invitation'),
                    extraTimeInvitation: new AbstractRouter('pa/admin/templates/emails/extraTimeInvitation/', 'extraTimeInvitation'),
                    resendInvitation: new AbstractRouter('pa/admin/templates/emails/resendInvitation/', 'resendInvitation'),
                    followup: new AbstractRouter('pa/admin/templates/emails/followup/', 'followup')
                }
            },
            criteria: new AbstractRouter('pa/admin/criteria/', 'criteria'),
            currencies: new AbstractRouter('pa/admin/currencies/', 'currencies'),
            departments: new AbstractRouter('pa/admin/departments/', 'departments'),
            languages: new AbstractRouter('pa/admin/languages/', 'languages'),
            sets: new AbstractRouter('pa/admin/sets/', 'sets'),
            set: new AbstractRouter('pa/admin/sets/', 'set'),
            teams: new AbstractRouter('pa/admin/teams/', 'teams'),
            users: new AbstractRouter('pa/admin/users/', 'users'),
            employeeTypes: new AbstractRouter('pa/admin/employeeTypes/', 'employeeTypes'),
            testsSessionDetails: {
                parentId: {
                    sessionEvents: new AbstractRouter('pa/admin/testSessionDetails/parentId/sessionEvents/', 'testSessionDetails/parentId/sessionEvents'),
                    sessionEventsCommits: new AbstractRouter('pa/admin/testSessionDetails/parentId/sessionEventsCommits/', 'testSessionDetails/parentId/sessionEventsCommits'),
                },
                self: new AbstractRouter('pa/admin/testSessionDetails/', 'testSessionDetails')
            }
        }
    }
}
