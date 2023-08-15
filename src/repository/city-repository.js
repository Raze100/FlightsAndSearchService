const { City } = require("../models/index")

class CityRepository{
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city; 
        }
        catch(error){
            console.log("Something went wrong in Repository layer1");
            throw{error};
        }
    }

    async deleteCity( cityId ){
        try{
            await City.destroy({
                where: {
                   id: cityId 
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in Repository layer2");
            throw{error};
        }
    }

    async updateCity( cityId, data){
        try {
        //   const city = await City.update(data,{
        //     where:{
        //         id : cityId
        //     }
        //   });  
        const city = await City.findByPk(cityId);
        city.name = data.name;
        city.save();
          return city;
        } 
        catch (error) {
            console.log("Something went wrong in Repository layer3");
            throw{error};
        }
    }

    async getCity( cityId ){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } 
        catch (error) {
            console.log("Something went wrong in Repository layer4");
            throw{error};
        }

    }

    async getAllCities(){
        try {
            const cities = await City.findAll(); 
            return cities;
        } catch (error) {
            console.log("Something went wrong in Repository layer4");
            throw{error};
        }
    }
}

module.exports = CityRepository;