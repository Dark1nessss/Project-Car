'use strict';
const bcrypt = require("bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    validPassword(password){
      return bcrypt.compareSync(password, this.password)
    }
  }
  Cliente.init({
    nome: {type: DataTypes.STRING, allowNull: false, unique: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    morada: {type: DataTypes.STRING},
    nif: {type: DataTypes.STRING, unique: true},
    data_nascimento: {type: DataTypes.DATE, },
    foto_perfil: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING, allowNull: false},
    is_admin: {type: DataTypes.BOOLEAN, defaultValue: 0},
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(user.password, salt)  
      },

      beforeUpdate: (user) => {
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(user.password, salt)
      }
    },
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};