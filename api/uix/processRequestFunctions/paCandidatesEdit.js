module.exports = {
	process: (data, body, params, token, files) => {
		data.id = +params.id;
		return data;
	}
};
