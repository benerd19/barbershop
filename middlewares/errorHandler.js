const { BaseError } = require('../utils/customErrors')

function errorHandler(err, req, res, next) {
    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({ message: err.message })
    }
    return res.status(500).json({ message: err.message })
}

module.exports = errorHandler
