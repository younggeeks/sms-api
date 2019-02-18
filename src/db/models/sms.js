'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sms = sequelize.define('Sms', {
    message: DataTypes.STRING
  }, {});
  Sms.associate = function(models) {
    // associations can be defined here
    Sms.belongsTo(models.Contact)
  };
  return Sms;
};