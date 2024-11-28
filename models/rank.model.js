const pool = require('../config/db.js')

class Rank {
    async getRankById(id) {
        try {
            const [rank] = await pool.query('select * from ranks where id = ?', [id])
            return rank[0]
        } catch (error) {
            throw error
        }
    }
}

module.exports = new Rank()
