/**
 * Created by ulloaen on 13/04/2020
 */

const AbstractRouter = require('./AbstractRouter');

module.exports = {
    login: {
        exclusions: new AbstractRouter('login/exclusions/', 'exclusions'),
        review: new AbstractRouter('login/exclusions/review/', 'review'),
        exclude: new AbstractRouter('login/exclusions/exclude/', 'exclude'),
        include: new AbstractRouter('login/exclusions/include/', 'include'),
        invalid: new AbstractRouter('login/exclusions/invalid/', 'invalid'),
        inclusions: new AbstractRouter('login/exclusions/inclusions/', 'inclusions'),
        undo: new AbstractRouter('login/exclusions/undo/', 'undo'),
        counters: new AbstractRouter('login/exclusions/counters/', 'counters'),
        history: new AbstractRouter('login/exclusions/history/', 'history'),
    }
};
