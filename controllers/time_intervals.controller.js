const TimeIntervalsService = require('../services/time_intervals.services')

class TimeIntervalsController {
    async getAllIntervals(req, res) {
        try {
            const intervals = await TimeIntervalsService.getAllIntervals()
            res.json(intervals)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TimeIntervalsController()
