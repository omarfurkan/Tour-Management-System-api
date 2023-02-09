const { getTourService, createToursServices, getTourByIdServeice, updateTourByIdService, getCheapestTourService } = require("../Services/Tour.services");


exports.getTour = async (req, res, next) => {
    try {
        let filter = req.query;
        const tours = await getTourService(filter)
        res.status(200).json({
            status: 'Success',
            data: tours
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Fail to get Data',
            error: error.message
        })
    }
}

exports.createTour = async (req, res, next) => {
    try {
        const result = await createToursServices(req.body)
        res.status(200).json({
            status: 'Success',
            message: 'Data inserted successfully',
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "Fail",
            message: 'Fail to insert data for tour',
            error: error.message
        })
    }
}


exports.getTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tourbyId = await getTourByIdServeice(id)
        res.status(200).json({
            status: "Success",
            data: tourbyId
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: 'Fail to provide such data',
            error: error.message
        })
    }
}

exports.updateTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateTourById = await updateTourByIdService(id, req.body)
        res.status(200).json({
            status: "Success",
            message: "Successfully updated such product",
            data: updateTourById
        })
    }
    catch (error) {
        res.status(400).json({
            status: "Fail",
            message: 'Fail to updata such data',
            error: error.message
        })
    }
}

exports.getCheapestTour = async (req, res, next) => {
    try {
        const cheapestTour = await getCheapestTourService()
        res.status(200).json({
            status: 'Success',
            data: cheapestTour
        })
    }
    catch (error) {
        res.status(400).json({
            status: "Fail",
            message: 'Fail to get data of cheapest tour',
            error: error.message
        })
    }
}