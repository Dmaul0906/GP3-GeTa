"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rak", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lemariId: {
        type: Sequelize.INTEGER(10),
        allowNull: true,
        defaultValue: null,
        references: {
          model: "lemari",
          key: "id",
        },
        onDelete: "cascade",
        ondUpdate: "cascade",
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("rak");
  },
};
