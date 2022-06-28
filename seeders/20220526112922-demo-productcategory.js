'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductCategories', [
      {
        CategoryId: [1],
        ProductId: [1],        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [1],        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [2],     
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [2],     
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [3],      
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [3],      
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [3],      
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [4],       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [4],       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [4],
        ProductId: [5],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [2],
        ProductId: [6],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [6],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [4],
        ProductId: [7],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [3],
        ProductId: [8],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [8],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [9],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [9],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [3],
        ProductId: [10],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [10],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [11],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [11],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [2],
        ProductId: [12],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [12],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [12],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [3],
        ProductId: [13],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [13],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [13],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [3],
        ProductId: [14],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [14],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [15],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [15],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [16],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [16],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [4],
        ProductId: [17],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [17],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [17],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [4],
        ProductId: [18],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [18],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [18],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [2],
        ProductId: [19],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [19],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [1],
        ProductId: [20],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [20],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [4],
        ProductId: [21],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [21],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [21],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [4],
        ProductId: [22],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [22],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [22],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [3],
        ProductId: [23],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [5],
        ProductId: [23],    
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CategoryId: [6],
        ProductId: [23],    
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
