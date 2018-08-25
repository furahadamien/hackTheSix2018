'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    fullName: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    volunteeringDayMin: DataTypes.INTEGER,
    volunteeringDayMax: DataTypes.INTEGER,
    causes: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
  });
  Users.associate = function(models) {

  };
  return Users;
};