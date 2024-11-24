const router = require('express').Router()
const recordController = require('../controllers/record.controller')

router.get('/all', recordController.getAllRecords)
router.post('/new', recordController.createRecord)
router.delete('/cancel/:id', recordController.cancelRecord)

module.exports = router