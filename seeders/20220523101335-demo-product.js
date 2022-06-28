'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
    await queryInterface.bulkInsert('Products', [
      {
        // camiseta 1
        name: 'Leer es Sexy',
        price: 25,
        image:"https://i.imgur.com/2Da11G6.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta 2 
        name: 'Bakalao',
        price: 25,
        image:"https://i.imgur.com/Cynq9q0.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta 3
        name: 'Lo que Pasó, Pasó',
        price: 25,
        image:"https://i.imgur.com/lJ7sFXT.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta 4 
        name: 'Todo Saldrá Mal',
        price: 25,
        image:"https://i.imgur.com/ai2157s.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // accesorio 5
        name: 'Me Renta',
        price: 15,
        image:"https://i.imgur.com/IbF9saS.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // pantalon 6
        name: 'Apoya a tu Gente',
        price: 35,
        image:"https://i.imgur.com/7opOABV.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // accesorio 7
        name: 'Gorro de la Suerte',
        price: 15,
        image:"https://i.imgur.com/Ri9Ko6G.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // sudadera 8
        name: 'Me das Ansiedad',
        price: 35,
        image:"https://i.imgur.com/8JvJ0uE.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta 9
        name: 'Perrita Super Caliente',
        price: 20,
        image:"https://i.imgur.com/Hlvvr0I.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // sudadera 10
        name: 'Esta Bien No Estar Bien',
        price: 35,
        image:"https://i.imgur.com/TLspjuQ.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta 11
        name: 'Mental Vacation',
        price: 20,
        image:"https://i.imgur.com/KyynMBg.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // pantalon 12
        name: 'Suerte Pants',
        price: 35,
        image:"https://i.imgur.com/mLuLw6O.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // sudadera 13
        name: 'Moonlight Hoodie',
        price: 30,
        image:"https://i.imgur.com/9Xy24u2.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // sudadera 14
        name: 'Baby Perrea',
        price: 30,
        image:"https://i.imgur.com/HgPleKi.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta 15
        name: 'Todo es Temporal',
        price: 20,
        image:"https://i.imgur.com/HEFNLWZ.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta 16
        name: 'Se Habla en la Cocina',
        price: 20,
        image:"https://i.imgur.com/MytSrWx.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // accesorio 17
        name: 'Pervert Phone Grip',
        price: 10,
        image:"https://i.imgur.com/KqmTQXi.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // accesorio 18
        name: 'Te Camelo Totebag',
        price: 10,
        image:"https://i.imgur.com/8UA0leL.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // pantalon 19 hombre
        name: 'Te Camelo Bañador',
        price: 30,
        image:"https://i.imgur.com/rBNrq4V.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // camiseta 20 hombre
        name: 'No me Rayes, Porfi',
        price: 10,
        image:"https://i.imgur.com/ZnppUvp.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // accesorio 21 unisex
        name: 'Calcetines Apoya a tu Gente',
        price: 10,
        image:"https://i.imgur.com/ZnppUvp.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // accesorio 22 unisex
        name: 'Bufanda Suerte',
        price: 20,
        image:"  https://i.imgur.com/PmhxbEk.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // sudadera 23 unisex
        name: 'Me renta',
        price: 30,
        image:"https://i.imgur.com/Mzwi0Vy.jpg",
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
