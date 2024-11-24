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
}

module.exports = new Review()
