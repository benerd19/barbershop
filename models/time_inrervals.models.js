const pool = require('../config/db.js')

class TimeIntervals {
    async getIntervalById(id) {
        try {
            const [interval] = await pool.query(`select * from time_intervals where id = ${id}`)
            return interval[0]
        } catch (error) {
            console.log(error)
        }
    }

    async getAllIntervals() {
        try {
            const intervals = await pool.query('select * from time_intervals')
            return intervals[0]
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new TimeIntervals()
