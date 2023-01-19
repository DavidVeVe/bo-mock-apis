/**
 * Created by ulloaen on 19/06/2019
 */
let AbstractFilePath;
let AccountHelper;
let Helpers;
let chalk;
let log;

class AbstractRouter {
	/**
	 *
	 * @param dataPath {String} Path to look up under data/uix folder
	 * @param prefixName {String} File prefix that all .json files will contain under this folder
	 */
	constructor(dataPath, prefixName) {
		if (!dataPath || !prefixName) {
			throw new Error('Path is required to instantiate');
		}

		AbstractFilePath = require('./AbstractFilePath');
		AccountHelper = require('./AccountHelper');
		Helpers = require('./Helpers');
		chalk = require('chalk');
		log = console.log;

		this.filePath = AbstractFilePath.getFilePath(dataPath);
		this.prefix = prefixName;
		this.postPrefix = `${this.prefix}-post`;
		this.getPrefix = `${this.prefix}-get`;
		this.deletePrefix = `${this.prefix}-delete`;
		this.HTF_FEEDBACK_FILES = ['validateReview-post', 'submitReview-post'];
	}

	get () {

		let
			filePath = this.filePath,
			prefix = this.getPrefix,
			initialPrefix = prefix;

		return function (req, res) {
			if (req.params.id) {
				prefix = `${req.params.id}-get`;
			}

			if (req.query.organizationId) {
		  	prefix = req.query.organizationId;
		  }

			if (req.params.parentId) {
				filePath = filePath.replace("parentId", req.params.parentId);
			}

			res.header('Access-Control-Expose-Headers', 'Content-Type');
			let token = req.header('X-Auth-Token');

			if (AccountHelper.doesTokenExist(token)) {
				let fileName = AbstractFilePath.fileExistsSync(`${filePath}${prefix}-${token}.json`)
					|| AbstractFilePath.fileExistsSync(`${filePath}${prefix}.json`) || Helpers.getCustomFilePath(req.params, initialPrefix);

				let file = fileName && Helpers.isJson(fileName) && JSON.parse(AbstractFilePath.readFileSync(fileName));

				let data;

				data = Helpers.getLimitAndOffset(file, req.params, req.query, prefix);
				data = Helpers.processGet(data, req.params, initialPrefix, prefix);

				if (data) res.json(data);
				else if (fileName) res.sendFile(fileName);
				else {
					const files = [`${filePath}${prefix}-${token}.json`, `${filePath}${prefix}.json`].join(',\n');
					log(chalk.yellowBright(`No such data for ${req.method} ${req.originalUrl}`));
					log(chalk.red(`Searched and not found files:\n[${files}]\n`));
					res.sendStatus(404);
				}

			} else {
				res.sendStatus(401);
			}
		};
	}

	post() {
		let
			filePath = this.filePath,
			filterParams = null,
			prefix = this.postPrefix,
			htfFiles = this.HTF_FEEDBACK_FILES;

    const initialPrefix = prefix;

		return function (req, res) {
			res.header('Access-Control-Expose-Headers', 'Content-Type');
			let token = req.header('X-Auth-Token');

      if (req.body.taskProjectIds) {
        prefix = `${initialPrefix}-${req.body.taskProjectIds}`;
      }

      if (req.body.limit) {
      	prefix = `${initialPrefix}-${req.body.limit}`;
      }

			if (AccountHelper.doesTokenExist(token) || htfFiles.includes(prefix)) {
				let fileName = AbstractFilePath.fileExistsSync(`${filePath}${prefix}-${token}.json`)
					|| AbstractFilePath.fileExistsSync(`${filePath}${prefix}.json`);

				if (fileName) {
					if (!req.query && !req.body) {
						res.sendFile(fileName);
					}

					let fileContent = JSON.parse(AbstractFilePath.readFileSync(fileName));
					let parsedData;

					// Handle Filtering
					parsedData = Helpers.filterElements(fileContent, req.query, req.body, prefix, req.path, token, req.originalUrl);

					//Handle Sorting
					parsedData = Helpers.sortBy(parsedData, req.query, req.body, prefix);

					//Handle Limit and Offset
					parsedData = Helpers.getLimitAndOffset(parsedData, req.query, req.body, prefix);

					parsedData = Helpers.filterFields(parsedData, req.body, prefix);

					parsedData = Helpers.processRequest(parsedData, req.params, req.body, prefix, token, req.files);

					res.json(parsedData);
				} else {
					log(chalk.yellowBright(`No such data for ${req.method} ${req.originalUrl}`));
					res.sendStatus(404);
				}

			} else {
				res.sendStatus(401);
			}
		};
	}

	delete() {
		let filePath = this.filePath;
		let prefix = this.deletePrefix;

		return function (req, res) {
			res.header("Access-Control-Expose-Headers", "Content-Type");
			let token = req.header("X-Auth-Token");

			if (AccountHelper.doesTokenExist(token)) {
				let fileName = AbstractFilePath.fileExistsSync(`${filePath}${prefix}-${token}.json`)
					|| AbstractFilePath.fileExistsSync(`${filePath}${prefix}.json`);

				let data = fileName && Helpers.isJson(fileName) && JSON.parse(AbstractFilePath.readFileSync(fileName));
				data = Helpers.processDelete(data, req.params, prefix);

				if (data) {
					res.json(data);

				} else if (fileName) {
					res.sendFile(fileName);

				} else {
					res.sendStatus(404);

				}

			} else {
				res.sendStatus(401)
			}
		}
	}
}

module.exports = AbstractRouter;
