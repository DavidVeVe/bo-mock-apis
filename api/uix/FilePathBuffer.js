const AbstractRouter = require("./AbstractRouter");
const AbstractFilePath = require("./AbstractFilePath");

class FilePathBuffer {
	constructor() {
		this.paths = {};
	}
	
	add(handlerObject, pathsObject = this.paths) {
		for (const requestName in handlerObject) {
			if (handlerObject.hasOwnProperty(requestName)) {
				const request = handlerObject[requestName];

				if (request instanceof AbstractRouter) {
					pathsObject[requestName] = new PathBuffer(request.filePath, request.getPrefix, request.postPrefix);

				} else if (typeof request.get !== "function" && typeof request.post !== "function") {
					pathsObject[requestName] = pathsObject[requestName] || {};
					this.add(request, pathsObject[requestName]);

				}
			}
		}
	}
}

class PathBuffer {
	constructor(filePath, getPrefix, postPrefix) {
		this.filePath = filePath;
		this.getPrefix = getPrefix;
		this.postPrefix = postPrefix;
	}

	getInitialGetFilePath() {
		return AbstractFilePath.fileExistsSync(`${this.filePath}${this.getPrefix}.json`);
	}

	getInitialPostFilePath() {
		return AbstractFilePath.fileExistsSync(`${this.filePath}${this.postPrefix}.json`);
	}

	getInitialGetFile() {
		const filePath = this.getInitialGetFilePath();
		return filePath && JSON.parse(AbstractFilePath.readFileSync(filePath));
	}

	getInitialPostFile() {
		const filePath = this.getInitialPostFilePath();
		return filePath && JSON.parse(AbstractFilePath.readFileSync(filePath));
	}

	getResetGetFile() {
		const filePath = AbstractFilePath.fileExistsSync(`${this.filePath}reset_${this.getPrefix}.json`);
		return filePath && JSON.parse(AbstractFilePath.readFileSync(filePath));
	}

	getResetPostFile() {
		const filePath = AbstractFilePath.fileExistsSync(`${this.filePath}reset_${this.postPrefix}.json`);
		return filePath && JSON.parse(AbstractFilePath.readFileSync(filePath));
	}
}

module.exports = new FilePathBuffer();