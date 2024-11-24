const router = require('express').Router()
const serviceController = require('../controllers/services.controller')

router.get('/all', serviceController.getAllServices)

module.exports = router
