const pool = require('../config/db.js')

class ListOfRecordsModel {
    async createRecord(recordId, serviceId) {
        try {
            await pool.query(`insert into list_of_works (record_id, service_id) values (${recordId}, ${serviceId})`)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ListOfRecordsModel()
