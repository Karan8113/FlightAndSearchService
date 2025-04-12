const express = require("express")
const bodyParser = require("body-parser")
const {PORT} = require('./config/serverSetup')
const CityRepository = require('./reposotory/city-repository')

const setupAndStartServer = ()=>{
  
    const app = express()
    app.use(bodyParser)
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`Server running at the PORT ${PORT}`);
        console.log(process.env.PORT);
        const obj = new CityRepository();
        // obj.createCity({name:"Tarale"});
        // obj.deleteCity(1);
    })
}

setupAndStartServer()