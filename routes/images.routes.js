const router = require('express').Router()
const imagesController = require('../controllers/images.controller')

router.get('/:id', imagesController.getImage)

module.exports = router
