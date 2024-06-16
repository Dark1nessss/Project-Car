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

    await queryInterface.bulkInsert('Marcas', [
      {
        nome: 'Mercedes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'BMW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mitsubishi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Citroen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fiat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Renault',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pegout',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
