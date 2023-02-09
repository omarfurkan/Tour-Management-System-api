const express = require('express')
const router = express.Router()
const tourController = require('../Controllers/Tours.controller')

router.route('/tours')
    .get(tourController.getTour)
    .post(tourController.createTour)

router.route('/tour/cheapest')
    .get(tourController.getCheapestTour)

router.route('/tour/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTourById)


module.exports = router;




