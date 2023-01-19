class RefreshToken {
		get(req, res) {
				let token = req.header('X-Auth-Token');
				if(!token) {
						res.status(401).json({});
				} else {
						res.status(200).json({"token":"121","isFirstLogin":false});
				}
		}
}

module.exports = RefreshToken;

