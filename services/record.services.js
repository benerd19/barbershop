const recordModel = require('../models/record.models')
const customerModel = require('../models/customers.models')
const ListOfRecordsModel = require('../models/listOfRecords.models')
const jwt = require('jsonwebtoken')

class recordServices {
    async createRecord(token, data) {
        try {
            const email = jwt.verify(token, process.env.JWT)
            const userId = await customerModel.getCustomerIdEmail(email)
            data.customer = userId.id
            const record = await recordModel.createRecord(data)
            data.services.map(async (service) => {
                await ListOfRecordsModel.createRecord(record.insertId, service)
            })
            return record
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new recordServices()
