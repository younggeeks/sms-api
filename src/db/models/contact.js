'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.hasMany(models.Sms,{onDelete:'CASCADE',foreignKey:'senderId',hooks:true})
  };
  return Contact;
};