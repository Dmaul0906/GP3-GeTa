"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("transaksi", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lukisanId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      tanggalSimpan: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW,
      },
      tanggalAmbil: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("transaksi");
  },
};
