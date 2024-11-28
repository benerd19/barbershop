const pool = require('../config/db.js')

class BarbershopModel {
    async getBarbershops() {
        try {
            const [barbershops] = await pool.query('select * from barbershops')
            return barbershops
        } catch (error) {
            throw error
        }
    }

    async getBarbershop(id) {
        try {
            const [barbershop] = await pool.query('select * from barbershops where id = ?', [id])
            return barbershop[0]
        } catch (error) {
            throw error
        }
    }

    async createBarbershop(barbershop) {
        try {
            const { name, address, latitude, longitude, phone } = barbershop
            const newBarbershop = await pool.query('insert into barbershops (name, address, latitude, longitude, phone) values (?, ?, ?, ?, ?)', [
                name,
                address,
                latitude,
                longitude,
                phone,
            ])
            return newBarbershop
        } catch (error) {
            throw error
        }
    }
}

module.exports = new BarbershopModel()
