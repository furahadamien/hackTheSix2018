'use strict';
module.exports = (sequelize, DataTypes) => {
  var Organizations = sequelize.define('Organizations', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    typeOfJob: DataTypes.STRING,
    image: DataTypes.STRING,
    causeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
          model: 'causes',
          key: 'id'
      }
    },
    totalVolunteeringDays: DataTypes.INTEGER
  }, {});
  Organizations.associate = function(models) {
    Organizations.belongsTo(models.Causes, {foreignKey: 'causeId'});
  };
  return Organizations;
};