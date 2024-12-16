const { BadRequestError } = require('../utils/customErrors')
const reviewService = require('../services/review.services')

class ReviewController {
    async createReview(req, res, next) {
        try {
            const review = req.body
            const token = req.headers.authorization
            if (!token) throw new BadRequestError('Token is not provided')
            await reviewService.createReview(review, token)
            res.status(201).json({ message: 'Review created' })
        } catch (error) {
            next(error)
        }
    }

    async getReviewByBarber(req, res, next) {
        try {
            const id = req.params.id
            const review = await reviewService.getReviewByBarber(id)
            res.json(review)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ReviewController()
