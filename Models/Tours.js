const mongoose = require('mongoose');

// Schema design
const tourSchema = mongoose.Schema({
    tour_name: {
        type: String,
        require: [true, 'Please provide a name that you want to tour.'],
        trim: true,
    },
    destination: {
        type: String,
        require: [true, 'Must provide full information of the destination you want to visit']
    },
    duration: {
        type: Number,
        required: [true, 'Please provide the duration of tour'],
        min: [1, 'Minimun duration is of 1 day']
    },
    price_per_person: {
        type: Number,
        required: true
    },
    availability: {
        type: Number,
        required: true,

    },
    image_url: {
        type: String
    }
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour;