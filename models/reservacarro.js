'use strict';
const {
  Model
} = require('sequelize');
const models = require('../models')
const Cliente = models.Cliente
const Carro = models.Carro

module.exports = (sequelize, DataTypes) => {
  class ReservaCarro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReservaCarro.init({
    cliente_id: {type: DataTypes.INTEGER, references: {model: Cliente, key:'id'}},
    carro_id: {type: DataTypes.INTEGER, references: {model: Carro, key:'id'}},
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    preco: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'ReservaCarro',
  });
  return ReservaCarro;
};