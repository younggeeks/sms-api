const express = require("express")
const app = express()
const models = require("./db/models")
const SmsController = require("./controllers/SmsController")
const ContactsController = require("./controllers/ContactsController")
const bodyParser = require("body-parser")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../src/db/helpers/schema.json');
const {validateMessage,validateContact} = require("./db/helpers/validation")
const {PORT} = process.env 
const smsController = new SmsController()
const contactsController = new ContactsController()

 
app.use(bodyParser({json:true}))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//messages endpoint
app.get("/messages", smsController.getAll)
app.get("/messages/:id", smsController.getOne)
app.delete("/messages/:id", smsController.deleteMessage)
app.get("/messages/sent/:id",smsController.getAllBySender)
app.get("/messages/received/:id",smsController.getAllByRecepient)
app.post("/messages",validateMessage,smsController.sendNewMessage)

//contacts endpoint
app.get("/contacts", contactsController.getContacts)
app.get("/contacts/:id", contactsController.getSingleContact)
app.delete("/contacts/:id", contactsController.deleteContact)
app.post("/contacts",validateContact,contactsController.insertContact)

let server;
models.sequelize.sync({force:false}).then(()=>{
   server = app.listen( PORT,()=>{
        console.log("Up and Running at ", PORT)
    })
})

module.exports = app