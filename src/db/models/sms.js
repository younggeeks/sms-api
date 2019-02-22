'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sms = sequelize.define('Sms', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    message: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Sms.associate = function(models) {
    // associations can be defined here
    Sms.belongsTo(models.Contact,{onDelete:'CASCADE',foreignKey:'senderId',hooks:true})
    Sms.belongsTo(models.Contact,{onDelete:'CASCADE', foreignKey:'receiverId',hooks:true})
  };
  return Sms;
};