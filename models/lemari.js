'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lemari extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  lemari.init({
    rakId: DataTypes.INTEGER,
    gedung: DataTypes.STRING,
    nomorLemari: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lemari',
    freezeTableName : true,
    timestamps : false
  });
  return lemari;
};