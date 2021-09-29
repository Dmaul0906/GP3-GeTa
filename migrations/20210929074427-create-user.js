"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      kota: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      email: {
        type: Sequelize.STRING(50),
      },
      password: {
        type: Sequelize.STRING,
      },
      role: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user");
  },
};
