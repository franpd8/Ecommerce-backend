'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Leer es Sexy',
        price: 25,
        image:"https://i.imgur.com/2Da11G6.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bakalao',
        price: 25,
        image:"https://i.imgur.com/Cynq9q0.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lo que pasó, pasó',
        price: 25,
        image:"https://i.imgur.com/lJ7sFXT.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Todo saldrá mal',
        price: 25,
        image:"https://i.imgur.com/ai2157s.jpg",
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
