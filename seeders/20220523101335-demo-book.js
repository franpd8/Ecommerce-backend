'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Leer es Sexy',
        price: 25,
        image:"https://i.imgur.com/2Da11G6.jpg",
        // GenreId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bakalao',
        price: 25,
        image:"https://i.imgur.com/Cynq9q0.jpg",
        // GenreId: [2, 4],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Lo que pasó, pasó',
        price: 25,
        image:"https://i.imgur.com/lJ7sFXT.jpg",
        // GenreId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Todo saldrá mal',
        price: 25,
        image:"https://i.imgur.com/ai2157s.jpg",
        // GenreId: [1],
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
