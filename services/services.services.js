const servicesModel = require('../models/services.models')

class ServicesService {
    async getAllServices() {
        try {
            const services = await servicesModel.getAllServices()
            return services
        } catch (error) {
            throw error
        }
    }
}

module.exports = new ServicesService()
