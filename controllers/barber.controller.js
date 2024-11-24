const barberService = require('../services/barber.services')

class BarberService {
    async getBarberByBarbershop(req, res) {
        try {
            const barber = await barberService.getBarberByBarbershop(req.params.id)
            res.json(barber)
        } catch (error) {
            console.log(error)
        }
    }

    async getBarberById(req, res) {
        try {
            const barber = await barberService.getBarberById(req.params.id)
            res.json(barber)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new BarberService()
