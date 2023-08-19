const { AirportService } = require('../services/index')

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created a new airport",
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a airport",
            err: error
        })
    }
}

const destroy = async (req,res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a airport",
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a airport",
            err: error
        })     
    }
}


//GET request -> /airport/:id
const get = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a airport",
            err : {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a airport" ,
            err: error
        })  
    }
}

//Patch request -> /airport/:id ->req.body
const update = async (req, res) => {
    try {
        const response = await airportService.updateAirport(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a airport",
            err : {}
        })
        
    } catch (error) {
      console.log(error); 
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to update a airport",
        err: error
    }) 
    }
}

const getAll = async (req, res) => {
    try{
        const airports = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Successfully fetched all airports",
            err: {}
        })
    }
    catch (error) {
        console.log(error); 
        return res.status(500).json({
          data: {},
          success: false,
          message: "Not able to fetch the airports",
          err: error
      })  
    }
}

module.exports = {
    create , destroy , get , update , getAll
}