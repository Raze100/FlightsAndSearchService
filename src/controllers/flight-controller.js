const { FlightService }= require('../services/index');
const { successCodes, serverErrorsCodes } = require('../utils/error-codes')

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(successCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Successfully created a new flight",
            err : {}
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(serverErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        })
    }
}

const getAll = async(req, res) => {
    try {
        const flight = await flightService.getAllFlightsData(req.query);
        return res.status(successCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully fetched all the flights",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(serverErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to fetch the flights data",
            err: error
        })
    }
}

module.exports = {
    create ,getAll
};