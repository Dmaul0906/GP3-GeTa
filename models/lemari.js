"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lemari extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      lemari.hasMany(models.rak);
    }
  }
  lemari.init(
    {
      gedung: DataTypes.STRING(10),
      nomorLemari: DataTypes.STRING(5),
    },
    {
      sequelize,
      modelName: "lemari",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return lemari;
};
