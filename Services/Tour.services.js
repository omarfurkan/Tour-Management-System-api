const Tour = require("../Models/Tours")

exports.getTourService = async () => {
    const result = await Tour.find({})
    return result
}

exports.createToursService = async (data) => {
    const result = await Tour.create(data)
    return result
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

exports.getCheapestTourService = async () => {
    const result = await Tour.find({}).limit(3).sort({ price_per_person: 1 })
    return result
}