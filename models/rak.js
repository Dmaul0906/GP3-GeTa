'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rak.init({
    lemariId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    nomorRak: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rak',
  });
  return rak;
};