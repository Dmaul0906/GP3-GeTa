"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("lukisan", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      namaLukisan: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      tahunBuat: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      deskripsi: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("lukisan");
  },
};
