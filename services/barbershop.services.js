const models = require('../models/barbershop.models')

class BarbershopService {
    async getBarbershops() {
        try {
            const barbershops = await models.getBarbershops()
            return barbershops
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new BarbershopService()
