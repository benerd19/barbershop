const { BadRequestError } = require('../utils/customErrors')
const barbershopService = require('../services/barbershop.services')

class BarbershopController {
    async getBarbershops(req, res, next) {
        try {
            const barbershops = await barbershopService.getBarbershops()
            res.json(barbershops)
        } catch (error) {
            next(error)
        }
    }

    async getBarbershopById(req, res, next) {
        try {
            if (!Number.isInteger(req.params.id)) throw new BadRequestError('Invalid data')
            const barbershop = await barbershopService.getBarbershopById(req.params.id)
            res.json(barbershop)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new BarbershopController()
