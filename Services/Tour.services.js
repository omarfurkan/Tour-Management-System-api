const Tour = require("../Models/Tours")

exports.getTourService = async () => {
    const tours = await Tour.find({})
    return tours
}

exports.createToursServices = async (data) => {
    const tour = await Tour.create(data)
    return tour
}