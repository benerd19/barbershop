const pool = require('../config/db.js')

class Services {
    async getAllServices() {
        try {
            const services = await pool.query('SELECT * FROM services')
            return services[0]
        } catch (error) {
            console.log(error)
        }
    }

    async getServiceById(id) {
        try {
            const [service] = await pool.query(`SELECT * FROM services WHERE id = ${id}`)
            return service[0]
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Services()
