const express = require("express")
const bodyParser = require("body-parser")
const {PORT} = require('./config/serverSetup')

const setupAndStartServer = ()=>{
  
    const app = express()
    app.use(bodyParser)
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`Server running at the PORT ${PORT}`);
        console.log(process.env.PORT);
    })
}

setupAndStartServer()