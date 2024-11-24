const router = require('express').Router()
const TimeIntervalsController = require('../controllers/time_intervals.controller')

router.get('/all', TimeIntervalsController.getAllIntervals)

module.exports = router
