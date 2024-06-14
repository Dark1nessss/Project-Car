'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReservaCarros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Clientes', key: 'id'}
      },
      carro_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Carros', key: 'id'}
      },
      data_inicio: {
        type: Sequelize.DATE
      },
      data_fim: {
        type: Sequelize.DATE
      },
      preco: {
        type: Sequelize.NUMERIC
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReservaCarros');
  }
};