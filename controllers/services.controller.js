const servicesService = require('../services/services.services')

class ServicesController {
    async getAllServices(req, res) {
        try {
            const services = await servicesService.getAllServices()
            res.json(services)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ServicesController()
