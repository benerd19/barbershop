class BaseError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

class BadRequestError extends BaseError {
    constructor(message) {
        super(message, 400)
    }
}

class NotFoundError extends BaseError {
    constructor(message) {
        super(message, 404)
    }
}

class ForbiddenError extends BaseError {
    constructor(message) {
        super(message, 403)
    }
}

module.exports = { BadRequestError, NotFoundError, ForbiddenError, BaseError }
