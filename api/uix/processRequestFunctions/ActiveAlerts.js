const AbstractFilePath = require('../AbstractFilePath');
const filesBuffer = require("../FilePathBuffer");
module.exports = {
	particularAlert: {
		process: (data, body, params) => {
			const path = filesBuffer.paths.alerts.getInitialPostFilePath();
			const AA = filesBuffer.paths.alerts.getInitialPostFile();
			const alertId = +params.id;
			const status = body.status;

			const activeAlertIndex = AA.activeAlerts.findIndex(alert => +alert.alertId === +alertId);
			const activeAlert = AA.activeAlerts[activeAlertIndex];
			if (activeAlertIndex !== -1) {
				if (status === "hidden") AA.activeAlerts.splice(activeAlertIndex, 1);
				if (status !== "hidden") AA.activeAlerts.status = status;
			}

			data.alertId = alertId;
			data.status = status;
			data.type = activeAlert.type;
			data.created = activeAlert.created;

			AbstractFilePath.writeFileSync(path, AA);

			return data;
		},
		processGet: params => {
			const AA = filesBuffer.paths.alerts.getInitialPostFile();
			const alertId = +params.id;

			return AA.activeAlerts.find(alert => alert.alertId === alertId);
		}
	},
	total: {
		process: (data, body) => {
			const AA = filesBuffer.paths.alerts.getInitialPostFile();
			AA.activeAlerts = AA.activeAlerts.filter(activeAlert => {
				const byType = body.type ? body.type.includes(activeAlert.type) : true;
				const byCollection = body.collectionIds ? body.collectionIds.includes(activeAlert.alertData.collectionId + "") : true;

				return byType && byCollection;
			});
			data.totalActiveAlerts = AA.activeAlerts.length;

			return data;
		}
	},
};