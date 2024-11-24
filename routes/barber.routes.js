const router = require('express').Router()
const barberController = require('../controllers/barber.controller')

router.get('/barbershop/:id', barberController.getBarberByBarbershop)

module.exports = router
