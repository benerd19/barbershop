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

    async getBarbershopById(req, res) {
        try {
            const barbershop = await barbershopService.getBarbershopById(req.params.id)
            res.json(barbershop)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new BarbershopController()
