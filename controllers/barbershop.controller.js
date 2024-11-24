const barbershopService = require('../services/barbershop.services')

class BarbershopController {
    async getBarbershops(req, res) {
        try {
            const barbershops = await barbershopService.getBarbershops()
            res.json(barbershops)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new BarbershopController()
