const router = require('express').Router()
const barbershopController = require('../controllers/barbershop.controller')

router.get('/all', barbershopController.getBarbershops)

module.exports = router
