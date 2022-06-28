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
      {
        // camiseta
        name: 'Me la sopla',
        price: 20,
        image:"https://i.imgur.com/RgMkig2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta
        name: 'Perrita Super Caliente',
        price: 25,
        image:"https://i.imgur.com/N67kcSi.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta
        name: 'Mental Vacation',
        price: 20,
        image:"https://i.imgur.com/KyynMBg.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // pantalon
        name: 'Suerte Pants',
        price: 35,
        image:"https://i.imgur.com/mLuLw6O.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // sudadera
        name: 'Moonlight Hoodie',
        price: 30,
        image:"https://i.imgur.com/9Xy24u2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // sudadera
        name: 'Baby Perrea',
        price: 30,
        image:"https://i.imgur.com/HgPleKi.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta
        name: 'Todo es Temporal',
        price: 20,
        image:"https://i.imgur.com/HEFNLWZ.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta
        name: 'Se Habla en la Cocina',
        price: 20,
        image:"https://i.imgur.com/MytSrWx.jpg",
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
