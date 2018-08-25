'use strict';
module.exports = (sequelize, DataTypes) => {
  var Causes = sequelize.define('Causes', {
    name: DataTypes.STRING
  }, {});
  Causes.associate = function(models) {
    // associations can be defined here
  };
  return Causes;
};