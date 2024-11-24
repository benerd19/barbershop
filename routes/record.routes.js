const router = require('express').Router()
const recordController = require('../controllers/record.controller')

router.post('/new', recordController.createRecord)

module.exports = router
