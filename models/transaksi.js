"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaksi.belongsTo(models.lukisan);
      transaksi.belongsTo(models.rak);
    }
  }
  transaksi.init(
    {
      lukisanId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      tanggalSimpan: DataTypes.DATE,
      tanggalAmbil: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "transaksi",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return transaksi;
};
