const express = require ("express");
const bodyParser = require ("body-parser")

const {PORT} = require('./config/serverConfig')

const ApiRoutes = require('./routes/index')

// const db = require('./models/index')
const { City, Airport } = require('./models/index')

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api', ApiRoutes);
     
    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`);

        // db.sequelize.sync({alter: true});

        // const city = await City.findOne({
        //     where: {
        //         id: 382
        //     }
        // });
        // const airports = await city.getAirports();
        // console.log(city,airports);
        
    })
}

setupAndStartServer();