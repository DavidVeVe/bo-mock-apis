/**
 * Created by ulloaen on 31/12/2018
 */
const fs = require('fs'),
    path = require('path'),
    dataDirectory = path.join(__dirname, '../../data/testing-interface/');

class AbstractFilePath{

    constructor(filePath){
        this.__dataPath = path.join(dataDirectory + filePath);
    }

    static getSessionBasePath(sessionId, suffixPath = ''){
        if (!sessionId){
            throw new Error('Session Id not provided');
        }
        return `/testSessions/${sessionId}/${suffixPath}`;

    }

    static getFilePath(filePath){
        return path.join(dataDirectory + filePath);
    }

    static fileExistsSync(filePath){
        return fs.existsSync(filePath) && filePath;
    }

    static pathJoin(){
        return path.join.apply(null, arguments);
    }

    static readFileSync(filePath){
        return fs.readFileSync(filePath);
    }
}

module.exports = AbstractFilePath;