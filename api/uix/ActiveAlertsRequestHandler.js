const AbstractRouter = require('./AbstractRouter');

module.exports = {
  activeAlerts: {
    v2: {
        alerts: new AbstractRouter('activeAlerts/v2/alerts/', 'alertsV2'),
    },
  }
};
