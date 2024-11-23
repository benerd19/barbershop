const model = require('../models/customers.models.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class CustomersService {
    async authorization(user) {
        try {
            const { email, password } = user
            const userFromDb = await model.getCustomerByEmail(email)
            if (userFromDb.length === 0) throw new Error('User not found')
            const validPassword = await bcrypt.compare(password, userFromDb[0].password)
            if (!validPassword) throw new Error('Invalid password')
            const token = jwt.sign(email, process.env.JWT)
            return { token: token }
        } catch (e) {
            console.log(e)
        }
    }

    async registration(user) {
        try {
            const { email, password } = user
            user.password = await bcrypt.hash(password, bcrypt.genSaltSync(10))
            await model.createCustomer(user)
            const token = jwt.sign(email, process.env.JWT)
            return token
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new CustomersService()
