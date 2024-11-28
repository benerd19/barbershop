const TimeIntervalsService = require('../services/time_intervals.services')

class TimeIntervalsController {
    async getAllIntervals(req, res, next) {
        try {
            const intervals = await TimeIntervalsService.getAllIntervals()
            res.json(intervals)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new TimeIntervalsController()
