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
   await queryInterface.bulkInsert('ReservaCarros', [
    {
    cliente_id: 1,
    carro_id: 1,
    data_inicio: "2024-06-17",
    data_fim: "2024-06-19",
    preco: 150.99,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    cliente_id: 2,
    carro_id: 2,
    data_inicio: "2024-06-17",
    data_fim: "2024-06-20",
    preco: 200.99,
    is_accepted: 1,
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
