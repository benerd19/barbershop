const reviewService = require('../services/review.services')

class ReviewController {
    async createReview(req, res) {
        try {
            const review = req.body
            const token = req.headers.authorization
            await reviewService.createReview(review, token)
            res.status(201).json({ message: 'Review created' })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ReviewController()
