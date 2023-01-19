const AbstractRouter = require('./AbstractRouter');
const AbstractFilePath = require('./AbstractFilePath');

class Collections {
    get() {
        return (req, res) => {
            if (!AbstractFilePath.fileExistsSync(req.params.id + '-get.json')) {
                return res.sendFile(AbstractFilePath.getFilePath('collections/default-get.json'));
            } else {
                new AbstractRouter('collections/', 'get-particular-collection');
            }
        };
    }
}

module.exports = Collections;
