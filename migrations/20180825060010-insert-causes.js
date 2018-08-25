'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Causes', [
        {
            name: 'Animal welfare',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Teaching',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'IT Support',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Homeless Shelter',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Environmental',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Causes', {});
  }
};