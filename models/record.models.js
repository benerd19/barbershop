const pool = require('../config/db.js')

class Record {
    async createRecord(data) {
        try {
            const { date, time, comment, customer, barber } = data
            const [record] = await pool.query(`insert into records (date, time_id, comment, customer_id, barber_id) values (?, ?, ?, ?, ?)`, [
                date,
                time,
                comment,
                customer,
                barber,
            ])
            return record
        } catch (error) {
            throw error
        }
    }

    async deleteRecord(id) {
        try {
            await pool.query('delete from records where id = ?', [id])
        } catch (error) {
            throw error
        }
    }

    async getRecordsByCustomer(id) {
        try {
            const [records] = await pool.query('select * from records where customer_id = ?', [id])
            return records
        } catch (error) {
            throw error
        }
    }

    async updateRecordById(id, data) {
        try {
            const { date, time, comment, barber } = data
            const [record] = await pool.query('update records set date = ?, time_id = ?, comment = ?, barber_id = ? where id = ?', [
                date,
                time,
                comment,
                barber,
                id,
            ])
            return record
        } catch (error) {
            throw error
        }
    }
}

module.exports = new Record()
