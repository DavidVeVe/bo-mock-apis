const AbstractFilePath = require('../AbstractFilePath');
const DiscoveredDsFunctions = require('./DiscoveredDsFunctions');

let filterAndCalculating = (data, filterParams, originalUrl) => {
	const apiSource = originalUrl.match(/^(?:[^\/]*\/){3}([\w]*)/)[1];
	let filePath = AbstractFilePath.getFilePath(`/${apiSource}`);
	let dds = JSON.parse(AbstractFilePath.readFileSync(`${filePath}/dataSources-post.json`));

	if (filterParams) {
		Object.keys(filterParams).forEach(key => {
			if (filterParams[key]) {
				dds = DiscoveredDsFunctions.filter[key](dds, filterParams[key]);
			}
		});
	}

	let stat = {};

	dds.forEach(item => {
		if (!stat[item.status]) {
			stat[item.status] = 0;
		}
		stat[item.status]++;
	});

	for (let key in stat) {
		if (stat.hasOwnProperty(key)) {
			switch (key) {
				case "IGNORED":
					data.ignored = stat[key];
					break;
				case "DISCOVERED":
					data.discovered = stat[key];
					break;
				case "ONBOARDED":
					data.onboarded = stat[key];
					break;
				case "AUTO_ONBOARDING":
					data.autoOnboarding = stat[key];
					break;
			}
		}
	}
	return data;

};

const DiscoveredDsStatsFunctions = {
	filterAndCalculating: filterAndCalculating
};

module.exports = DiscoveredDsStatsFunctions;
