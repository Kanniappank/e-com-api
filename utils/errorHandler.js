'use strict';

const defaultMessage = "Something went wrong, Please try again";

const ErrorCodes = {
    badRequest: 400,
    internalServerError: 500,
    forbidden: 403,
    unAuthorized: 401,
    badGateWay: 502,
    notExist: 404
}

class ErrorHandler {
    constructor() { }

    responseObj({
        statusCode,
        err
    }) {
        const error = (err instanceof Error || err instanceof RangeError || err instanceof ReferenceError || err instanceof SyntaxError || err instanceof TypeError || err.statusCode) ? err : new Error(err.message ? err.message : err);
        const response = error.statusCode ? error : {
            statusCode: statusCode,
            message: error.message || defaultMessage,
            stack: error.stack || ''
        };

        console.log('response : ', response);
        return Promise.reject(response);
    }

    internalServerError(err) {
        return this.responseObj({
            statusCode: ErrorCodes.internalServerError,
            err
        });
    }
    badRequest(err) {
        return this.responseObj({
            statusCode: ErrorCodes.badRequest,
            err
        });
    }

}

module.exports = new ErrorHandler();