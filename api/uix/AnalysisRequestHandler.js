/**
 * Created by ulloaen on 13/04/2020
 */
const AbstractRouter = require('./AbstractRouter');

module.exports = {
    analysis: {
        ce: {
            timed: {
                developers: new AbstractRouter('analysis/ce/timed/developers/', 'developers'),
                collections: new AbstractRouter('analysis/ce/timed/collections/', 'collections'),
                organizations: new AbstractRouter('analysis/ce/timed/organizations/', 'organizations'),
                projects: new AbstractRouter('analysis/ce/timed/projects/', 'projects')
            },
            timeless: {
                developers: {
                    language: new AbstractRouter('analysis/ce/timeless/developers/language/', 'language'),
                    self: new AbstractRouter('analysis/ce/timeless/developers/', 'developers')
                },
                collections: new AbstractRouter('analysis/ce/timeless/collections/', 'collections'),
                organizations: new AbstractRouter('analysis/ce/timeless/organizations/', 'organizations'),
                projects: new AbstractRouter('analysis/ce/timeless/projects/', 'projects')
            },
            filedirectory_commits: {
                collections: {
                    developers: new AbstractRouter('analysis/ce/filedirectory_commits/collections/developers/', 'developers'),
                }
            },
            clickthrough: {
                developersByCollection: new AbstractRouter('analysis/ce/clickthrough/developersByCollection/', 'developersByCollection'),
                revisions: new AbstractRouter('analysis/ce/clickthrough/revisions/', 'revisions'),
                files: new AbstractRouter('analysis/ce/clickthrough/files/', 'files'),
                projects: new AbstractRouter('analysis/ce/clickthrough/projects/', 'projects'),
                collections: new AbstractRouter('analysis/ce/clickthrough/collections/', 'collections'),
                validateReview: new AbstractRouter('analysis/ce/clickthrough/validateReview/', 'validateReview'),
                submitReview: new AbstractRouter('analysis/ce/clickthrough/submitReview/', 'submitReview')
            }
        },
        deliverables: {
            phases: new AbstractRouter('analysis/deliverables/phases/', 'phases'),
            cost: new AbstractRouter('analysis/deliverables/cost/', 'cost'),
            clickthrough: {
                developers: new AbstractRouter('analysis/deliverables/clickthrough/developers/', 'developers'),
                revisions: new AbstractRouter('analysis/deliverables/clickthrough/revisions/', 'revisions')
            }
        },
        overview: {
            timeless: {
                average: {
                    selection: new AbstractRouter('analysis/overview/timeless/average/selection/', 'selection'),
                    combined: new AbstractRouter('analysis/overview/timeless/average/combined/', 'combined'),
                },
                detailed: {
                    projects: new AbstractRouter('analysis/overview/timeless/detailed/projects/', 'projects'),
                    organizations: new AbstractRouter('analysis/overview/timeless/detailed/organizations/', 'organizations'),
                },
                combined: {
                    projects: new AbstractRouter('analysis/overview/timeless/combined/projects/', 'projects'),
                    segments: new AbstractRouter('analysis/overview/timeless/combined/segments/', 'segments'),
                    jobRoles: new AbstractRouter('analysis/overview/timeless/combined/jobRoles/', 'jobRoles'),
                    developers: new AbstractRouter('analysis/overview/timeless/combined/developers/', 'developers'),
                    ranks: new AbstractRouter('analysis/overview/timeless/combined/ranks/', 'ranks'),
                    types: new AbstractRouter('analysis/overview/timeless/combined/types/', 'types'),
                    locations: new AbstractRouter('analysis/overview/timeless/combined/locations/', 'locations'),
                    countries: new AbstractRouter('analysis/overview/timeless/combined/countries/', 'countries'),
                    employers: new AbstractRouter('analysis/overview/timeless/combined/employers/', 'employers'),
                    organizations: new AbstractRouter('analysis/overview/timeless/combined/organizations/', 'organizations'),
                    self: new AbstractRouter('analysis/overview/timeless/combined/', 'combined'),
                }
            },
            monthlyTrend: {
                projects: new AbstractRouter('analysis/overview/monthlyTrend/projects/', 'projects'),
                segments: new AbstractRouter('analysis/overview/monthlyTrend/segments/', 'segments'),
                jobRoles: new AbstractRouter('analysis/overview/monthlyTrend/jobRoles/', 'jobRoles'),
                types: new AbstractRouter('analysis/overview/monthlyTrend/types/', 'types'),
                ranks: new AbstractRouter('analysis/overview/monthlyTrend/ranks/', 'ranks'),
                locations: new AbstractRouter('analysis/overview/monthlyTrend/locations/', 'locations'),
                countries: new AbstractRouter('analysis/overview/monthlyTrend/countries/', 'countries'),
                employers: new AbstractRouter('analysis/overview/monthlyTrend/employers/', 'employers'),
                organizations: new AbstractRouter('analysis/overview/monthlyTrend/organizations/', 'organizations'),
                self: new AbstractRouter('analysis/overview/monthlyTrend/', 'monthlyTrend'),
            },
            breakdownByFileType: {
                detailed: {
                    projects: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/projects/', 'projects'),
                    segments: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/segments/', 'segments'),
                    jobRoles: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/jobRoles/', 'jobRoles'),
                    ranks: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/ranks/', 'ranks'),
                    types: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/types/', 'types'),
                    locations: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/locations/', 'locations'),
                    countries: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/countries/', 'countries'),
                    developers: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/developers/', 'developers'),
                    employers: new AbstractRouter('analysis/overview/timeless/combined/developers/', 'developers'),
                    organizations: new AbstractRouter('analysis/overview/breakdownByFileType/detailed/organizations/', 'organizations'),
                },
                combined: new AbstractRouter('analysis/overview/breakdownByFileType/combined/', 'combined'),
            },
            attritionInTheCodebase: {
                detailed: {
                    projects: new AbstractRouter('analysis/overview/attritionInTheCodebase/detailed/projects/', 'projects'),
                    segments: new AbstractRouter('analysis/overview/attritionInTheCodebase/detailed/segments/', 'segments'),
                    jobRoles: new AbstractRouter('analysis/overview/attritionInTheCodebase/detailed/jobRoles/', 'jobRoles'),
                    ranks: new AbstractRouter('analysis/overview/attritionInTheCodebase/detailed/ranks/', 'ranks'),
                    types: new AbstractRouter('analysis/overview/attritionInTheCodebase/detailed/types/', 'types'),
                    locations: new AbstractRouter('analysis/overview/attritionInTheCodebase/detailed/locations/', 'locations'),
                    countries: new AbstractRouter('analysis/overview/attritionInTheCodebase/detailed/countries/', 'countries'),
                    employers: new AbstractRouter('analysis/overview/timeless/combined/developers/', 'developers'),
                    organizations: new AbstractRouter('analysis/overview/attritionInTheCodebase/detailed/organizations/', 'organizations'),
                },
                combined: new AbstractRouter('analysis/overview/attritionInTheCodebase/combined/', 'combined'),
            },
            clickthrough: {
                organizations: new AbstractRouter('analysis/overview/clickthrough/organizations/', 'organizations'),
                projects: new AbstractRouter('analysis/overview/clickthrough/projects/', 'projects'),
                collections: new AbstractRouter('analysis/overview/clickthrough/collections/', 'collections'),
                developers: new AbstractRouter('analysis/overview/clickthrough/developers/', 'developers'),
            }
        },
    }
};
