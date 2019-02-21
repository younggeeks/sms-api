'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    id:{
      type:DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.hasMany(models.Sms,{onDelete:'CASCADE',foreignKey:'senderId'})
  };
  return Contact;
};