'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        number: '#1ouw',        
        UserId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '#2ouw',        
        UserId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '#3ouw',        
        UserId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '#4ouw',        
        UserId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '#5ouw',        
        UserId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
