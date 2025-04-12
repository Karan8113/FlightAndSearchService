const express = require("express")
const {PORT} = require('./config/serverSetup')

const setupAndStartServer = ()=>{
  
    const app = express()
    app.listen(PORT,()=>{
        console.log(`Server running at the PORT ${PORT}`);
        console.log(process.env.PORT);
    })
}

setupAndStartServer()