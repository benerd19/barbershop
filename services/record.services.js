const recordModel = require('../models/record.models')
const customerModel = require('../models/customers.models')
const ListOfRecordsModel = require('../models/listOfRecords.models')
const TimeIntervalsModel = require('../models/time_inrervals.models')
const serviceModel = require('../models/services.models')
const barberModel = require('../models/barber.models')
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

    async canselRecord(id) {
        try {
            await ListOfRecordsModel.deleteByRecordId(id)
            await recordModel.deleteRecord(id)
        } catch (e) {
            console.log(e)
        }
    }

    async getAllRecords(token) {
        try {
            const email = jwt.verify(token, process.env.JWT)
            const userId = await customerModel.getCustomerIdEmail(email)
            const records = await recordModel.getRecordsByCustomer(userId.id)
            const fullRecords = await Promise.all(
                records.map(async (record) => {
                    const time = await TimeIntervalsModel.getIntervalById(record.time_id)
                    const services = await ListOfRecordsModel.getServicesByCustomer(record.id)
                    record.services = await Promise.all(
                        services.map(async (service) => {
                            const info = await serviceModel.getServiceById(service.service_id)
                            return info
                        })
                    )
                    delete record.time_id
                    record.time = time.time_value
                    record.barber = await barberModel.getBarberById(record.barber_id)
                    delete record.barber_id
                    return record
                })
            )
            return fullRecords
        } catch (e) {
            console.log(e)
        }
    }

    async updateRecordById(id, data) {
        try {
            await recordModel.updateRecordById(id, data)
            await ListOfRecordsModel.deleteByRecordId(id)
            const { services } = data
            await Promise.all(
                services.map(async (service) => {
                    await ListOfRecordsModel.createRecord(id, service)
                })
            )
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new recordServices()
