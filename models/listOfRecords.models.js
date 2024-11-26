const pool = require('../config/db.js')

class ListOfRecordsModel {
    async createRecord(recordId, serviceId) {
        try {
            await pool.query('insert into list_of_works (record_id, service_id) values (?, ?)', [recordId, serviceId])
        } catch (error) {
            console.log(error)
        }
    }

    async deleteByRecordId(recordId) {
        try {
            await pool.query('delete from list_of_works where record_id = ?', [recordId])
        } catch (error) {
            console.log(error)
        }
    }

    async getServicesByCustomer(id) {
        try {
            const [services] = await pool.query('select * from list_of_works where record_id = ?', [id])
            return services
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ListOfRecordsModel()
