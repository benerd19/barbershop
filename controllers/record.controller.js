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
}

module.exports = new RecordController()
