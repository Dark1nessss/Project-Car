'use strict';
const {
  Model
} = require('sequelize');
const models = require('../models')
const Marca = models.Marca

module.exports = (sequelize, DataTypes) => {
  class Modelo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Modelo.init({
    marca_id: {type: DataTypes.INTEGER, references: {model: Marca, key:'id'}},
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Modelo',
  });
  return Modelo;
};