const pool = require('../config/db.js')

class BarbershopModel {
    async getBarbershops() {
        try {
            const [barbershops] = await pool.query('SELECT * FROM barbershops')
            return barbershops
        } catch (error) {
            console.log(e)
        }
    }

    async getBarbershop(id) {
        try {
            const [barbershop] = await pool.query(`select * from barbershops where id = ${id}`)
            return barbershop
        } catch (error) {
            console.log(e)
        }
    }

    async createBarbershop(barbershop) {
        try {
            const { name, address, latitude, longitude, phone } = barbershop
            const newBarbershop = await pool.query(
                `insert into barbershops (name, address, latitude, longitude, phone) values ('${name}', '${address}', '${latitude}', '${longitude}', '${phone}')`
            )
            return newBarbershop
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new BarbershopModel()
