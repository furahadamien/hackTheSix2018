'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Causes', [
        {
            id: 1,
            name: 'Animal welfare',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            name: 'Teaching',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            name: 'IT Support',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 4,
            name: 'Homeless Shelter',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 5,
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