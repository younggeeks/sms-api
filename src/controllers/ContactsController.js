const models = require("../db/models")
module.exports = class ContactsController{
    async getContacts(req,res){
        try {
            const contacts = await  models.Contact.findAll()
            if(!contacts) res.status(404).json({'message':'No contacts found'})
            res.status(200).json(contacts)
           } catch (error) {
            res.json(error)
           }
    }
    async getSingleContact(req,res){
        try {
            const {id} = req.params
            const contact = await  models.Contact.findById(id)
            if(!contact) res.status(404).json({'message':'Contact with ID '+ id+ " was not found"})
            res.status(200).json(contact)
           } catch (error) {
            res.json(error)
           }
    }
    async insertContact(req,res){
        try {
            const contact = await  models.Contact.create(req.body)
            if(!contact) res.status(404).json({'message':'Insertion failed '})
            res.status(200).json(contact)
           } catch (error) {
            res.json(error)
           }
    }
}