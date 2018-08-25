'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    fullName: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    volunteeringDayMin: DataTypes.INTEGER,
    volunteeringDayMax: DataTypes.INTEGER
  }, {
  });
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};