const { ForbiddenError } = require('../utils/customErrors')
const services = require('../services/customers.services')

class CustomerController {
    async authorization(req, res, next) {
        try {
            const token = await services.authorization(req.body)
            res.json(token)
        } catch (error) {
            next(error)
        }
    }

    async registration(req, res, next) {
        try {
            const customer = req.body
            const token = await services.registration(customer)
            res.json({ token: token })
        } catch (error) {
            next(error)
        }
    }

    async getInfo(req, res, next) {
        try {
            const token = req.headers.authorization
            if (!token) throw new ForbiddenError('Token is not provided')
            const user = await services.getInfo(token)
            res.json(user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CustomerController()
