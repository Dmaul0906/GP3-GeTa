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
        references: {
          model: "lukisan",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      rakId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "rak",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      tanggalSimpan: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      tanggalAmbil: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("transaksi");
  },
};
