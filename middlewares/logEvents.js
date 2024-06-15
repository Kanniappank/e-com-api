const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const fsPromise = require('fs').promises
const path = require('path')

const logEvents = async (message, fileName) => {
    try {
        const dateTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`
        const longItem = `${dateTime}\t${uuidv4()}\t${message}\n`
        console.log(longItem);
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromise.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromise.appendFile(path.join(__dirname, '..', 'logs', fileName), longItem)
    } catch (error) {
        console.error(error)

    }

}
const logger = (req, res, next) => {
    const message = `${req.method}\t${req.header.origin}\t${req.url}`
    const fileName = 'event.txt'
    logEvents(message, fileName)
    next();
}

module.exports = { logger, logEvents }