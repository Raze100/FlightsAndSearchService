// const { CrudRepository } = require("../repository/index");

class CrudService{
    constructor(repository) {
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } 
        catch (error) {
            console.log("Something went wrong in crud service layer");
            throw {error};
        }
    }

    async destroy(id){
        try {
            const response = await this.repository.destroy(id);
            return response;
        } 
        catch (error) {
            console.log("Something went wrong in crud service layer");
            throw {error};
        }
    }

    async update(id, data){
        try {
            const response = await this.repository.updatecrud(id, data);
            return response;
        } 
        catch (error) {
            console.log("Something went wrong in crud service layer");
            throw {error};
        }
    }

    async get(id){
        try {
            const crud = await this.crudRepository.get(id);
            return crud;
        } 
        catch (error) {
            console.log("Something went wrong in crud service layer");
            throw {error};
        }
    }

    async getAll(){
        try { 
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service layer");
            throw {error};
        }
    }
}

module.exports = CrudService;