const { FlightRepository, AirplaneRepository } = require('../repository/index')
const { compareTime } = require('../utils/helper')
class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw{error:"Arrival Time cannot be less than Departure Time!"}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight = await this.flightRepository.createFlight({
                ... data,totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Ssomething went wrong in Service layer");
            throw(error);
        }
    }

    // async getFlight(data){
    //     try{
    //         const flight = await this.flightRepository.getFlight(data.flightId);
    //         return flight;
    //     }
    //     catch(error){
    //         console.log("Ssomething went wrong in Service layer");
    //         throw(error);
    //     }
    // } 

    async getAllFlightsData(data){
        try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("Ssomething went wrong in Service layer");
            throw(error);
        }
    }
}

module.exports = FlightService;