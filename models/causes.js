'use strict';
module.exports = (sequelize, DataTypes) => {
  var Causes = sequelize.define('Causes', {
    name: DataTypes.STRING
  }, {});
  Causes.associate = function(models) {

  };
  return Causes;
};