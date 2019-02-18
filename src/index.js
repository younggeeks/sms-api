const express = require("express")
const app = express()
const models = require("./db/models")
const SmsController = require("./controllers/SmsController")
const bodyParser = require("body-parser")
const {PORT} = process.env 
const smsController = new SmsController()


app.use(bodyParser({json:true}))


//messages endpoint
app.get("/messages", smsController.getAll)
app.get("/messages/:id", smsController.getOne)
app.get("/messages/sent/:id",smsController.getAllBySender)
app.get("/messages/received/:id",smsController.getAllByRecepient)

app.post("/messages",smsController.sendNewMessage)

//contacts endpoint


models.sequelize.sync({force:false}).then(()=>{
    app.listen( PORT,()=>{
        console.log("Up and Running at ", PORT)
    })
})

