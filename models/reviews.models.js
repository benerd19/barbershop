const pool = require('../config/db.js')

class Review {
    async getReviewByBarber(id) {
        try {
            const [review] = await pool.query(`select * from reviews where barber_id = ${id}`)
            return review
        } catch (error) {
            console.log(error)
        }
    }

    async createReview(review) {
        try {
            const { rating, date, text, barber_id, customer } = review
            await pool.query(`insert into reviews (rating, date, text, barber_id, customer_id) values (?, ?, ?, ?, ?)`, [
                rating,
                date,
                text,
                barber_id,
                customer,
            ])
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Review()
