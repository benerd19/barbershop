const { ForbiddenError, NotFoundError, BadRequestError } = require('../utils/customErrors')
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
            if (!userId) throw new NotFoundError('User not found')
            data.customer = userId.id
            const { date, time, comment, barber, services } = data
            if (!date || !time || !comment || !barber || !services) throw new BadRequestError('Invalid data')
            const record = await recordModel.createRecord(data)
            data.services.map(async (service) => {
                await ListOfRecordsModel.createRecord(record.insertId, service)
            })
            return { id: record.insertId }
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) throw new ForbiddenError('Invalid token')
            throw error
        }
    }

    async canselRecord(id) {
        try {
            if (!Number.isInteger(Number(id))) throw new BadRequestError('Invalid data')
            await ListOfRecordsModel.deleteByRecordId(id)
            await recordModel.deleteRecord(id)
        } catch (error) {
            throw error
        }
    }

    async getAllRecords(token) {
        try {
            const email = jwt.verify(token, process.env.JWT)
            const userId = await customerModel.getCustomerIdEmail(email)
            if (!userId) throw new NotFoundError('User not found')
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
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) throw new ForbiddenError('Invalid token')
            throw error
        }
    }

    async updateRecordById(id, data) {
        try {
            if (!data) throw new BadRequestError('Invalid data')
            if (!Number.isInteger(Number(id))) throw new BadRequestError('Invalid data')
            await recordModel.updateRecordById(id, data)
            await ListOfRecordsModel.deleteByRecordId(id)
            const { services } = data
            await Promise.all(
                services.map(async (service) => {
                    await ListOfRecordsModel.createRecord(id, service)
                })
            )
        } catch (e) {
            throw error
        }
    }
}

module.exports = new recordServices()
