const e = require('cors')
const pool = require('../config/db.js')

class Barber {
    async getBarberByBarbershop(barbershopId) {
        try {
            const barbers = await pool.query('select id, first_name, second_name, surname, photo, info  from barbers where barbershop_id = ?', [
                barbershopId,
            ])
            return barbers[0]
        } catch (error) {
            throw error
        }
    }

    async getBarberById(id) {
        try {
            const [barber] = await pool.query('select * from barbers where id = ?', [id])
            return barber[0]
        } catch (error) {
            throw error
        }
    }
}

module.exports = new Barber()
