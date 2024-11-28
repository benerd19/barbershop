const { ForbiddenError } = require('../utils/customErrors')
const recordServices = require('../services/record.services')

class RecordController {
    async createRecord(req, res, next) {
        try {
            if (!req.headers.authorization) throw new ForbiddenError('Token is not provided')
            const record = await recordServices.createRecord(req.headers.authorization, req.body)
            res.json(record)
        } catch (error) {
            next(error)
        }
    }

    async cancelRecord(req, res, next) {
        try {
            await recordServices.canselRecord(req.params.id)
            res.sendStatus(200)
        } catch (error) {
            next(error)
        }
    }

    async getAllRecords(req, res, next) {
        try {
            const records = await recordServices.getAllRecords(req.headers.authorization)
            res.json(records)
        } catch (error) {
            next(error)
        }
    }

    async updateRecord(req, res, next) {
        try {
            const record = await recordServices.updateRecordById(req.params.id, req.body)
            res.json(record)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new RecordController()
