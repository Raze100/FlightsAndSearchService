const { Op } = require('sequelize')

const { Airport } = require("../models/index")

class AirportRepository{
    async createAirport({ name }){
        try{
            const airport = await Airport.create({name});
            return airport; 
        }
        catch(error){
            console.log("Something went wrong in Repository layer1");
            throw{error};
        }
    }

    async deleteAirport( airportId ){
        try{
            await Airport.destroy({
                where: {
                   id: airportId 
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in Repository layer2");
            throw{error};
        }
    }

    async updateAirport( AirportId, data){
        try {
        //   const Airport = await Airport.update(data,{
        //     where:{
        //         id : AirportId
        //     }
        //   });  
        const airport = await Airport.findByPk(airportId);
        airport.name = data.name;
        airport.save();
          return airport;
        } 
        catch (error) {
            console.log("Something went wrong in Repository layer3");
            throw{error};
        }
    }

    async getAirport( airportId ){
        try {
            const airport = await airport.findByPk(airportId);
            return airport;
        } 
        catch (error) {
            console.log("Something went wrong in Repository layer4");
            throw{error};
        }

    }

    async getAllAirports(filter){
        try {
            if(filter.name){
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op .startsWith]:filter.name
                        }
                    }
                });
                return airports;
            }
            const airports = await Airport.findAll(); 
            return airports;
        } catch (error) {
            console.log("Something went wrong in Repository layer4");
            throw{error};
        }
    }
}

module.exports = AirportRepository;