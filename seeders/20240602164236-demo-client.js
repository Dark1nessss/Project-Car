'use strict';
const bcrypt = require("bcrypt")

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

    const hashedPassword = await bcrypt.hash('admin', 10)

    await queryInterface.bulkInsert('Clientes', [
      {
        nome: 'João Silva',
        email: 'joaosilva@gmail.com',
        morada: 'Rua de sao dinis 545 1dt',
        nif: 123456789,
        data_nascimento: '2005-04-30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // estes dois sao irmaos gemeos xd
      {
        nome: 'João Manel',
        email: 'joaomanel@gmail.com',
        morada: 'Rua de sao dinis 545 1dt',
        nif: 123456788,
        data_nascimento: '2005-04-30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'admin',
        email: 'admin@admin.com',
        password: hashedPassword,
        is_admin: 1,
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
