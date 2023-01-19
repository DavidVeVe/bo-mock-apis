/**
 * Created by ulloaen on 19/06/2019
 */
const SsoCheck = require('./SsoCheck'),
    Authenticate = require('./Authenticate'),
    AbstractRouter = require('./AbstractRouter'),
    LogOut = require('./LogOut'),
    ErrorLog = require('./ErrorLog'),
    ChangePwd = require('./ChangePwd'),
    RefreshToken = require('./RefreshToken'),
    FilePathBuffer = require('./FilePathBuffer'),
    PredictiveAssessment = require('./PAHandlerRequest'),
    AD = require('./ADRequestHandler'),
    AutoDiscovery = require('./AutoDiscoveryRequestHandler'),
    LoginExclusion = require('./LoginExclusionRequestHandler'),
    Analysis = require('./AnalysisRequestHandler'),
    Benchmark = require('./BenchmarkRequestHandler'),
    DataSources = require('./DataSourcesRequestHandler'),
    UserPreferences = require('./UserPreferencesRequestHandler'),
    Scorecard = require('./ScorecardRequestHandler'),
    Tld = require('./TldRequestHandler'),
    activeAlerts = require('./ActiveAlertsRequestHandler');

const Collections = require('./Collections');
const Groups = require('./Groups');

const RequestHandler = {
    activityData: new AbstractRouter('activityData/', 'activityData'),
    support: new AbstractRouter('support/', 'support'),
    alerts: new AbstractRouter('alerts/', 'alerts'),
    alertsSubscription: new AbstractRouter('alerts/', 'alertsSubscription'),
    alert: new AbstractRouter('alerts/', 'alert'),
    alertStatus: new AbstractRouter('alerts/', 'alert'),
    authenticate: new Authenticate(),
    refreshToken: new RefreshToken(),
    collections: {
        list: new AbstractRouter('collections/', 'collections'),
        one: new Collections(),
        deleteOne: new AbstractRouter('collections/', 'deleteOne'),
    },
    counters: new AbstractRouter('counter/', 'counters'),
    activeAlertsCounters: new AbstractRouter('counter/', 'activeAlertsCounters'),
    countries: new AbstractRouter('locations/', 'countries'),
    developers: new AbstractRouter('developers/', 'developers'),
    deliverables: new AbstractRouter('deliverables/', 'deliverables'),
    employers: new AbstractRouter('employers/', 'employers'),
    favorites: new AbstractRouter('favorites/', 'favorites'),
    favoritesCes: new AbstractRouter('favorites/ces/', 'ces'),
    favoritesDeliverables: new AbstractRouter('favorites/deliverables/', 'deliverables'),
    favoritesOverview: new AbstractRouter('favorites/overview/', 'overview'),
    jobRoles: new AbstractRouter('ranks-segment-role/', 'jobRoles'),
    locations: new AbstractRouter('locations/', 'locations'),
    newAlerts: new AbstractRouter('alerts/', 'newAlerts'),
    getVulnerabilityDetails: new AbstractRouter('alerts/sca/', 'getVulnerabilityDetails'),
    organizations: new AbstractRouter('organization/', 'organizations'),
    profile: new AbstractRouter('profile/', 'profile'),
    blocks: new AbstractRouter('blocks/', 'blocks'),
    newFeatureNotification: new AbstractRouter('newFeatureNotification/', 'new_feature_notification'),
    projects: {
        list: new AbstractRouter('projects/', 'projects'),
        one: new AbstractRouter('projects/', 'get-particular-project')
    },
    ranks: new AbstractRouter('ranks-segment-role/', 'ranks'),
    segments: new AbstractRouter('ranks-segment-role/', 'segments'),
    ssoCheck: new SsoCheck(),
    types: new AbstractRouter('types/', 'types'),

    logout: new LogOut(),
    errorLog: new ErrorLog(),
    integrators: new AbstractRouter('integrators/', 'integrators'),
    status: {
        dataSources: new AbstractRouter('status/dataSources/', 'status-dataSources'),
        integrators: new AbstractRouter('status/integrators/', 'integrators')
    },

    dataCollectionHistory: {
        self: new AbstractRouter('dataCollectionHistory/', 'dataCollectionHistory'),
        counters: new AbstractRouter('dataCollectionHistory/counters/', 'counters'),
        availableFilters: new AbstractRouter('dataCollectionHistory/availableFilters/', 'availableFilters'),
        split: new AbstractRouter('dataCollectionHistory/split/', 'split')
    },
    admin: {
        roles: new AbstractRouter('admin/roles/', 'roles'),
        rol: new Collections(),
        users: new AbstractRouter('admin/users/', 'users'),
        groups: {
            list: new AbstractRouter('admin/groups/', 'groups'),
            one: new Groups(),
        },
        developers: new AbstractRouter('admin/developers/', 'developers'),
        changePwd: new ChangePwd(),
        state: {
            developers: new AbstractRouter('admin/state/developers/', 'developers'),
        },
        csv: {
            developers: {
                validate: new AbstractRouter('admin/csv/developers/', 'developersValidate'),
            }
        }
    },
    releaseNotes: {
        list: new AbstractRouter('releaseNotes/', 'list'),
    },
    apiDocs: {
        list: new AbstractRouter('api-docs/', 'list'),
    },
    biDatasets: {
        list: new AbstractRouter('BiDatasets/', 'list'),
        biDatasetsTypes: new AbstractRouter('BiDatasets/', 'datasetsTypes')

    },
    manageGroups: {
        groups: new AbstractRouter('groups/','groups')
    },
    manageRoles:{
        roles: new AbstractRouter('roles/','roles')
    },
    customDeliverables: new AbstractRouter('customDeliverables/', 'customDeliverables'),
    deliverable: new Collections(),
    ...Benchmark,
    ...PredictiveAssessment,
    ...AD,
    ...AutoDiscovery,
    ...LoginExclusion,
    ...Analysis,
    ...DataSources,
    ...UserPreferences,
    ...Scorecard,
    ...Tld,
    ...activeAlerts,
};

FilePathBuffer.add(RequestHandler);

module.exports = RequestHandler;
