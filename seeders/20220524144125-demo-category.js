'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Camiseta',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pantalón',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sudadera',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Accesorio',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hombre',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mujer',        
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
