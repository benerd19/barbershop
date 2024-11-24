const router = require('express').Router()
const barbershopController = require('../controllers/barbershop.controller')

router.get('/all', barbershopController.getBarbershops)
router.get('/:id', barbershopController.getBarbershopById)

module.exports = router
