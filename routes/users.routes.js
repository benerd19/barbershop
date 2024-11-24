const router = require('express').Router()
const customerController = require('../controllers/customer.controller')

router.post('/authorization', customerController.authorization)
router.post('/registration', customerController.registration)
router.get('/info', customerController.getInfo)

module.exports = router
