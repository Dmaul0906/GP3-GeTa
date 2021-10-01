"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lukisan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      lukisan.belongsTo(models.user);
      lukisan.hasOne(models.transaksi);
    }
  }
  lukisan.init(
    {
      userId: DataTypes.INTEGER,
      namaLukisan: DataTypes.STRING(30),
      author: DataTypes.STRING(30),
      tahunBuat: DataTypes.STRING(10),
      deskripsi: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "lukisan",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return lukisan;
};
