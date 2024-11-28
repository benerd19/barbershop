const servicesService = require('../services/services.services')

class ServicesController {
    async getAllServices(req, res, next) {
        try {
            const services = await servicesService.getAllServices()
            res.json(services)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ServicesController()
