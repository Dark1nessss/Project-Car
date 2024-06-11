'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Carros',[
    {
      marca_id: 3,
      modelo_id: 1,
      ano: 1999,
      preco: 35.000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      marca_id: 3,
      modelo_id: 2,
      ano: 1998,
      preco: 50.000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      marca_id: 5,
      modelo_id: 3,
      ano: 2005,
      preco: 1.000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
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
