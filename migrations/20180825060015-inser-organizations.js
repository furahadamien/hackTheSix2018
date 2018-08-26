'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Organizations', [
        {
            id: 1,
            name: 'Toronto Animal Services',
            address: '1300 Sheppard Ave W, North York',
            description: 'Help us walk stray dogs—they are super cute and you get a workout too!',
            typeOfJob: 'Dog Walker',
            image: 'http://www.councillordiciano.ca/wp-content/uploads/2017/08/toronto-animal-services.png',
            causeId: 1,
            totalVolunteeringDays:1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            name: 'Toronto Environmental Alliance',
            address: '30 Duncan St, Toronto ',
            description: 'We need help with raising awareness for a booth at the science fair. ',
            typeOfJob: 'Program Educator',
            image: 'http://d3n8a8pro7vhmx.cloudfront.net/toenviro/legacy_url/33/logo.png?1419017518',
            causeId: 2,
            totalVolunteeringDays:2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            name: 'Toronto Central YMCA',
            address: '20 Grosvenor St, Toronto',
            description: 'Teach and help elementary students with their math homework.',
            typeOfJob: 'Math Tutor',
            image: 'https://vmcdn.ca/f/files/shared/corporate-logos/ymca-logo.jpg;w=630',
            causeId: 2,
            totalVolunteeringDays:3,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organizations', {});
  }
};