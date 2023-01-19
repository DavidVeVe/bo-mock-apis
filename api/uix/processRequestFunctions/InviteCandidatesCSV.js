module.exports = {
	process: (data, body, params, token, files) => {
		return JSON.parse(files[0].buffer.toString());
	}
};
