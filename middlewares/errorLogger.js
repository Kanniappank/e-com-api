const logger = require('./logEvents')

const errorHandler = (err, req, res, next) => {
    let message = `${err.name}\t${err.message}`;
    let fileName = 'errorLogger.txt';
    logger(message, fileName);
    res.status(500).send(err.message);
    next();

}
module.exports = errorHandler;