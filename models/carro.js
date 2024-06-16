'use strict';
const {
  Model
} = require('sequelize');
const models = require('../models')
const Marca = models.Marca
const Modelo = models.Modelo

module.exports = (sequelize, DataTypes) => {
  class Carro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carro.belongsTo(models.Marca, { foreignKey: 'marca_id', as: 'marca'})
      Carro.belongsTo(models.Modelo, { foreignKey: 'modelo_id', as: 'modelo'})
    }
  }
  Carro.init({
    marca_id: {type: DataTypes.INTEGER, references: {model: Marca, key:'id'}},
    modelo_id: {type: DataTypes.INTEGER, references: {model: Modelo, key:'id'}},
    ano: DataTypes.INTEGER,
    preco: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Carro',
  });
  return Carro;
};