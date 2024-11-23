const pool = require('../config/db.js')

class CustomersModel {
    async getCustomer(id) {
        try {
            const [customer] = await pool.query(`select * from customers where id = ${id}`)
            return customer
        } catch (error) {
            console.log(error)
        }
    }

    async createCustomer(customer) {
        try {
            const { firstName, secondName, surname, phone, email, password } = customer
            const newCustomer = await pool.query(
                `insert into customers (first_name, second_name, surname, phone, email, password) values ('${firstName}', '${secondName}', '${surname}', '${phone}', '${email}', '${password}')`
            )
            return newCustomer
        } catch (error) {
            console.log(error)
        }
    }

    async getCustomerByEmail(email) {
        try {
            const customer = await pool.query(`select email, password from customers where email = '${email}'`)
            return customer[0]
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new CustomersModel()
