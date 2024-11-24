const barberModels = require('../models/barber.models')

class BarberService {
    async getBarberByBarbershop(barbershopId) {
        try {
            const barber = await barberModels.getBarberByBarbershop(barbershopId)
            return barber
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new BarberService()
