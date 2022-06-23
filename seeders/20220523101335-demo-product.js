'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
    await queryInterface.bulkInsert('Products', [
      {
        // camiseta
        name: 'Leer es Sexy',
        price: 25,
        image:"https://i.imgur.com/2Da11G6.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta
        name: 'Bakalao',
        price: 25,
        image:"https://i.imgur.com/Cynq9q0.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta
        name: 'Lo que pasó, pasó',
        price: 25,
        image:"https://i.imgur.com/lJ7sFXT.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta
        name: 'Todo saldrá mal',
        price: 25,
        image:"https://i.imgur.com/ai2157s.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // accesorio
        name: 'Me renta',
        price: 15,
        image:"https://i.imgur.com/IbF9saS.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // pantalon
        name: 'Apoya a tu gente',
        price: 35,
        image:"https://i.imgur.com/7opOABV.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Gorro
        name: 'Gorro de la suerte',
        price: 15,
        image:"https://i.imgur.com/Ri9Ko6G.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // sudadera
        name: 'Me das ansiedad',
        price: 35,
        image:"https://i.imgur.com/8JvJ0uE.jpg",
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
