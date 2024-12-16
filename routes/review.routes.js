const router = require('express').Router()
const ReviewController = require('../controllers/review.controller')

router.post('/new', ReviewController.createReview)
router.get('/barber/:id', ReviewController.getReviewByBarber)

module.exports = router
