const express = require("express")
const app = express()
const models = require("./db/models")
const {PORT} = process.env 

app.get("/", (req,res)=>{
    res.send("Hello world , awesomeness will come your way soon")
})



models.sequelize.sync({force:false}).then(()=>{
    app.listen( PORT,()=>{
        console.log("Up and Running at ", PORT)
    })
})

