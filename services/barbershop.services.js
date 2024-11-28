const models = require('../models/barbershop.models')
const { NotFoundError } = require('../utils/customErrors')

class BarbershopService {
    async getBarbershops() {
        try {
            const barbershops = await models.getBarbershops()
            return barbershops
        } catch (error) {
            throw error
        }
    }

    async getBarbershopById(id) {
        try {
            const barbershop = await models.getBarbershop(id)
            if (!barbershop) throw new NotFoundError('Barbershop not found')
            return barbershop
        } catch (error) {
            throw error
        }
    }
}

module.exports = new BarbershopService()
