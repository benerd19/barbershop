const reviewModel = require('../models/reviews.models.js')
const jwt = require('jsonwebtoken')
const customerModel = require('../models/customers.models.js')

class ReviewService {
    async createReview(review, token) {
        try {
            const email = jwt.verify(token, process.env.JWT)
            const userId = await customerModel.getCustomerIdEmail(email)
            review.customer = userId.id
            await reviewModel.createReview(review)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ReviewService()
