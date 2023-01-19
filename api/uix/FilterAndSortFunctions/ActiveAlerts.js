module.exports = {
	filter: {
		byType: (activeAlerts, types) => {
			activeAlerts.activeAlerts  = activeAlerts.activeAlerts.filter(activeAlert => types.includes(activeAlert.type));
			return activeAlerts;
		},
		byCollection: (activeAlerts, collections) => {
			activeAlerts.activeAlerts  = activeAlerts.activeAlerts.filter(activeAlert => collections.includes(activeAlert.alertData.collectionId + ""));
			return activeAlerts;
		}
	}
};