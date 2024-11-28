const pool = require('../config/db.js')

class CustomersModel {
    async getCustomer(email) {
        try {
            const [customer] = await pool.query('select first_name, second_name, surname, phone from customers where email = ?', [email])
            return customer[0]
        } catch (error) {
            throw error
        }
    }

    async createCustomer(customer) {
        try {
            const { firstName, secondName, surname, phone, email, password } = customer
            const newCustomer = await pool.query(
                'insert into customers (first_name, second_name, surname, phone, email, password) values (?, ?, ?, ?, ?, ?)',
                [firstName, secondName, surname, phone, email, password]
            )
            return newCustomer
        } catch (error) {
            throw error
        }
    }

    async getCustomerByEmail(email) {
        try {
            const customer = await pool.query('select email, password from customers where email = ?', [email])
            return customer[0]
        } catch (error) {
            throw error
        }
    }

    async getCustomerIdEmail(email) {
        try {
            const [customer] = await pool.query('select id from customers where email = ?', [email])
            return customer[0]
        } catch (e) {
            throw error
        }
    }
}

module.exports = new CustomersModel()
