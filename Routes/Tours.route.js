const express = require('express')
const router = express.Router()
const tourController = require('../Controllers/Tours.controller')

router.route('/')
    .get(tourController.getTour)
    .post(tourController.createTour)


module.exports = router;



