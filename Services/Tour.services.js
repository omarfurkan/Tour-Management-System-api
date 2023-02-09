const Tour = require("../Models/Tours")

exports.getTourService = async () => {
    const tours = await Tour.find({})
    return tours
}

exports.createToursService = async (data) => {
    const tour = await Tour.create(data)
    return tour
}

exports.getTourByIdServeice = async (id) => {
    const result = await Tour.findById(id)
    return result
}

exports.updateTourByIdService = async (id, data) => {
    const result = await Tour.updateOne({ _id: id }, { $set: data }, {
        runValidators: true
    })
    return result;
}