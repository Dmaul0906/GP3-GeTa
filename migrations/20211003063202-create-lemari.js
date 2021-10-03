"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("lemari", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gedung: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      nomorLemari: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("lemari");
  },
};
