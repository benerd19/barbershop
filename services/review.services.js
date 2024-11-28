const { BadRequestError, NotFoundError } = require('../utils/customErrors')
const reviewModel = require('../models/reviews.models.js')
const jwt = require('jsonwebtoken')
const customerModel = require('../models/customers.models.js')

class ReviewService {
    async createReview(review, token) {
        try {
            const email = jwt.verify(token, process.env.JWT)
            const userId = await customerModel.getCustomerIdEmail(email)
            if (!userId) throw new NotFoundError('User not found')
            review.customer = userId.id
            await reviewModel.createReview(review)
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) throw new BadRequestError('Invalid token')
            throw error
        }
    }
}

module.exports = new ReviewService()
