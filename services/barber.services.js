const barberModels = require('../models/barber.models')
const rankModel = require('../models/rank.model')
const reviewModel = require('../models/reviews.models')

class BarberService {
    async getBarberByBarbershop(barbershopId) {
        try {
            const barber = await barberModels.getBarberByBarbershop(barbershopId)
            return barber
        } catch (error) {
            console.log(error)
        }
    }

    async getBarberById(id) {
        try {
            const barber = await barberModels.getBarberById(id)
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
            console.log(error)
        }
    }
}

module.exports = new BarberService()
