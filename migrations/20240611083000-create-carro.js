'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marca_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Marcas', key: 'id'}
      },
      modelo_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Modelos', key: 'id'}
      },
      ano: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Carros');
  }
};