const recordServices = require('../services/record.services')

class RecordController {
    async createRecord(req, res) {
        try {
            const record = await recordServices.createRecord(req.headers.authorization, req.body)
            res.json(record)
        } catch (error) {
            console.log(error)
        }
    }

    async cancelRecord(req, res) {
        try {
            await recordServices.canselRecord(req.params.id)
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
        }
    }

    async getAllRecords(req, res) {
        try {
            const records = await recordServices.getAllRecords(req.headers.authorization)
            res.json(records)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new RecordController()
