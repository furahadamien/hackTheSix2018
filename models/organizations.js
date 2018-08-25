'use strict';
module.exports = (sequelize, DataTypes) => {
  var Organizations = sequelize.define('Organizations', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    typeOfJob: DataTypes.STRING
  }, {});
  Organizations.associate = function(models) {
    // associations can be defined here
  };
  return Organizations;
};