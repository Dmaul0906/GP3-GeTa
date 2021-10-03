"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.lukisan);
    }
  }
  user.init(
    {
      nama: DataTypes.STRING(30),
      kota: DataTypes.STRING(30),
      email: DataTypes.STRING(50),
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return user;
};
