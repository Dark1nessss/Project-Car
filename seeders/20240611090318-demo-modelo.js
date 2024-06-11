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
   await queryInterface.bulkInsert('Modelos', [
    {
      marca_id: 3,
      nome: 'Lancer Evolution',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      marca_id: 3,
      nome: 'Eclipse',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      marca_id: 5,
      nome: 'Punto',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      marca_id: 6,
      nome: 'Air Traffic',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      marca_id: 6,
      nome: 'Arkana',
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
