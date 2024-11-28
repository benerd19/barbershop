const { BadRequestError } = require('../utils/customErrors')
const barberModels = require('../models/barber.models')
const rankModel = require('../models/rank.model')
const reviewModel = require('../models/reviews.models')

class BarberService {
    async getBarberByBarbershop(barbershopId) {
        try {
            const barber = await barberModels.getBarberByBarbershop(barbershopId)
            if (barber.length === 0) throw new BadRequestError('Barbers not found')
            return barber
        } catch (error) {
            throw error
        }
    }

    async getBarberById(id) {
        try {
            const barber = await barberModels.getBarberById(id)
            if (barber.length === 0) throw new BadRequestError('Barber not found')
            const rank = await rankModel.getRankById(barber.rank_id)
            const reviews = await reviewModel.getReviewByBarber(id)
            if (reviews.length > 0) {
                let sum = 0
                for (let i = 0; i < reviews.length; i++) {
                    sum += reviews[i].rating
                }
                barber.rating = sum / reviews.length
            } else barber.rating = 0
            delete barber.rank_id
            delete barber.barbershop_id
            barber.rank = rank.name
            return barber
        } catch (error) {
            throw error
        }
    }
}

module.exports = new BarberService()
