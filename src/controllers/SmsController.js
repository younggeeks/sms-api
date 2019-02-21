const models = require("../db/models");
module.exports = class SmsController {
  async getAll(req, res) {
      const sms = await models.Sms.findAll();
      return res.status(200).json(sms);
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const sms = await models.Sms.findById(id);
      if (!!sms) {
        return res.status(200).json(sms);
      }else{
      return res.status(404).json({ message: "Sms with ID " + id + " was not found" });
      }
      
    } catch (error) {
      console.log(error)

    }
  }

  async getAllBySender(req, res) {
    const { id } = req.params;
    try {
      const sms = await models.Sms.findAll({
        where: { senderId: id },
        raw: true
      });
      console.log('te zms ', !!sms)
      if (sms.length>0) return res.status(200).json(sms);
      return res.status(404).json({ message: `No sms from a sender with id ${id}` });
      
    } catch (error) {
      console.log("an error occured ", error);
    }
  }
  async getAllByRecepient(req, res) {
    const { id } = req.params;
    try {
      const sms = await models.Sms.findAll({
        where: { receiverId: id },
        raw: true
      });
      if (sms.length > 0) return res.status(200).json(sms);
      return res.status(404).json({ message: `No sms from a sender with id ${id}` });
    } catch (error) {
      console.log("an error occured ", error);
    }
  }
  async sendNewMessage(req, res) {
    console.log(req.body.status);
    const saved = await models.Sms.create(req.body);
   return res.status(201).json(saved);
  }
};
