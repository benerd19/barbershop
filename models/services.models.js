const pool = require('../config/db.js')

class Services {
    async getAllServices() {
        try {
            const services = await pool.query('select * from services')
            return services[0]
        } catch (error) {
            console.log(error)
        }
    }

    async getServiceById(id) {
        try {
            const [service] = await pool.query('select * from services where id = ?', [id])
            return service[0]
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Services()
