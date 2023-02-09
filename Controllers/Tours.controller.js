const { getTourService, createToursServices } = require("../Services/Tour.services");


exports.getTour = async (req, res, next) => {
    try {
        let filter = req.query;
        console.log(filter)
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