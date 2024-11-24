const services = require('../services/customers.services')

class CustomerController {
    async authorization(req, res) {
        try {
            const token = await services.authorization(req.body)
            res.json(token)
        } catch (error) {
            console.log(error)
        }
    }

    async registration(req, res) {
        try {
            const customer = req.body
            const token = await services.registration(customer)
            res.json({ token: token })
        } catch (error) {
            console.log(error)
        }
    }

    async getInfo(req, res) {
        try {
            const token = req.headers.authorization
            const user = await services.getInfo(token)
            res.json(user)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new CustomerController()
