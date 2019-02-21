const express = require("express")
const app = express()
const models = require("./db/models")
const SmsController = require("./controllers/SmsController")
const ContactsController = require("./controllers/ContactsController")
const bodyParser = require("body-parser")
const {validateMessage,validateContact} = require("./db/helpers/validation")
const {PORT} = process.env 
const smsController = new SmsController()
const contactsController = new ContactsController()

app.use(bodyParser({json:true}))


//messages endpoint
app.get("/messages", smsController.getAll)
app.get("/messages/:id", smsController.getOne)
app.get("/messages/sent/:id",smsController.getAllBySender)
app.get("/messages/received/:id",smsController.getAllByRecepient)
app.post("/messages",validateMessage,smsController.sendNewMessage)

//contacts endpoint
app.get("/contacts", contactsController.getContacts)
app.get("/contacts/:id", contactsController.getSingleContact)
app.post("/contacts",validateContact,contactsController.insertContact)

let server;
models.sequelize.sync({force:false}).then(()=>{
   server = app.listen( PORT,()=>{
        console.log("Up and Running at ", PORT)
    })
})

module.exports = app