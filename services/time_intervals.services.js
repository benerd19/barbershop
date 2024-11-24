const TimeIntervalsModel = require('../models/time_inrervals.models')

class TimeIntervalsService {
    async getAllIntervals() {
        try {
            const intervals = await TimeIntervalsModel.getAllIntervals()
            return intervals
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TimeIntervalsService()
