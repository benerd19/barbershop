const router = require('express').Router()
const barberController = require('../controllers/barber.controller')

router.get('/barbershop/:id', barberController.getBarberByBarbershop)
router.get('/:id', barberController.getBarberById)

module.exports = router
