const router = require('express').Router()
const ReviewController = require('../controllers/review.controller')

router.post('/new', ReviewController.createReview)

module.exports = router
