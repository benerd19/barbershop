const pool = require('../config/db.js')

class Record {
    async createRecord(data) {
        try {
            const { date, time, comment, customer, barber } = data
            const [record] = await pool.query(`INSERT INTO records (date, time_id, comment, customer_id, barber_id) VALUES (?, ?, ?, ?, ?)`, [
                date,
                time,
                comment,
                customer,
                barber,
            ])
            return record
        } catch (error) {
            console.log(error)
        }
    }

    async deleteRecord(id) {
        try {
            await pool.query(`delete from records where id = ${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    async getRecordsByCustomer(id) {
        try {
            const [records] = await pool.query(`select * from records where customer_id = ${id}`)
            return records
        } catch (error) {
            console.log(error)
        }
    }

    async updateRecordById(id, data) {
        try {
            const { date, time, comment, barber } = data
            const [record] = await pool.query(`update records set date = ?, time_id = ?, comment = ?, barber_id = ? where id = ${id}`, [
                date,
                time,
                comment,
                barber,
            ])
            return record
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Record()
