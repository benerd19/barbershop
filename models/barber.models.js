const pool = require('../config/db.js')

class Barber {
    async getBarberByBarbershop(barbershopId) {
        try {
            const barbers = await pool.query(`select * from barbers where barbershop_id = ${barbershopId}`)
            return barbers[0]
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Barber()
