const logger = require('./logEvents')

const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || err.status || 500;
    let error = (err.message) ? {
        message: err.message
    } : err;

    let message = `${err.name}\t${err.message}`;
    let fileName = 'errorLogger.txt';
    logger(message, fileName);
    let data = {
        statusCode: statusCode,
        success: false,
        error: error
    }

    res.status(statusCode).send(data);
    next();

}
module.exports = errorHandler;