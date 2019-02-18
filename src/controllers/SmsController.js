const models = require("../db/models")
module.exports = class SmsController{
    constructor() {
        this.getAll = this.getAll.bind(this)
    }
    async getAll(req,res){
       try {
        const sms = await  models.Sms.findAll()
        if(!sms) res.status(404).json({'message':'Sms with ID '+ id+ " was not found"})
        res.status(200).json(sms)
       } catch (error) {
        res.json(error)
       }
    }

    async getOne(req,res){
        const {id} = req.params
        try {
            const sms = await models.Sms.findById(id)
            if(!sms) res.status(404).json({'message':'Sms with ID '+ id+ " was not found"})
            res.status(200).json(sms)
        } catch (error) {
            res.json(error)
        }
    }

    async getAllBySender(req,res){
        const {id} = req.params 
        try {
            const sms = await models.Sms.findAll({where:{senderId:id},raw:true})
            if(!sms) res.status(404).json({message:`No sms from a sender with id ${id}`})
            res.status(200).json(sms)
        } catch (error) {
            console.log("an error occured ", error)
            res.json(error)
        }
    }
    async getAllByRecepient(req,res){
        const {id} = req.params;
        try {
            const sms = await models.Sms.findAll({where:{receiverId:id},raw:true})
            if(!sms) res.status(404).json({message:`No sms from a sender with id ${id}`})
            res.status(200).json(sms)
        } catch (error) {
            console.log("an error occured ", error)
            res.json(error)
        }
    }

    async sendNewMessage(req,res){
        console.log(req.body.status)
        const saved = await models.Sms.create(req.body)
        res.json(saved)
    }
}