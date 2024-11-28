const { NotFoundError, BadRequestError } = require('../utils/customErrors')
const model = require('../models/customers.models.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class CustomersService {
    async authorization(user) {
        try {
            const { email, password } = user
            if (!email || !password) throw new BadRequestError('Invalid data')
            const userFromDb = await model.getCustomerByEmail(email)
            if (userFromDb.length === 0) throw new NotFoundError('User not found')
            const validPassword = await bcrypt.compare(password, userFromDb[0].password)
            if (!validPassword) throw new NotFoundError('Invalid password')
            const token = jwt.sign(email, process.env.JWT)
            return { token: token }
        } catch (error) {
            throw error
        }
    }

    async registration(user) {
        try {
            const { email, password, firstName, surname, phone } = user
            if (!email || !password || !firstName || !surname || !phone) throw new BadRequestError('Invalid data')
            const userFromDb = await model.getCustomerByEmail(email)
            if (userFromDb.length > 0) throw new BadRequestError('User already exists')
            user.password = await bcrypt.hash(password, bcrypt.genSaltSync(10))
            await model.createCustomer(user)
            const token = jwt.sign(email, process.env.JWT)
            return token
        } catch (error) {
            throw error
        }
    }

    async getInfo(token) {
        try {
            const email = jwt.verify(token, process.env.JWT)
            const user = await model.getCustomer(email)
            return user
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) throw new BadRequestError('Invalid token')
        }
    }
}

module.exports = new CustomersService()
