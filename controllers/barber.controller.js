const { BadRequestError } = require('../utils/customErrors')
const barberService = require('../services/barber.services')

class BarberService {
    async getBarberByBarbershop(req, res, next) {
        try {
            if (!req.params.id || Number.isInteger(req.params.id)) throw new BadRequestError('Invalid data')
            const barber = await barberService.getBarberByBarbershop(req.params.id)
            res.json(barber)
        } catch (error) {
            next(error)
        }
    }

    async getBarberById(req, res, next) {
        try {
            if (!Number.isInteger(Number(req.params.id))) {
                throw new BadRequestError('Invalid data')
            }
            const barber = await barberService.getBarberById(req.params.id)
            res.json(barber)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new BarberService()
