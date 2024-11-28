const TimeIntervalsModel = require('../models/time_inrervals.models')

class TimeIntervalsService {
    async getAllIntervals() {
        try {
            const intervals = await TimeIntervalsModel.getAllIntervals()
            return intervals
        } catch (error) {
            throw error
        }
    }
}

module.exports = new TimeIntervalsService()
