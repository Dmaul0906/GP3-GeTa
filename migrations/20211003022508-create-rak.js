'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rak', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lemariId: {
        type: Sequelize.INTEGER(10),
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      nomorRak: {
        type: Sequelize.INTEGER(10),
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rak');
  }
};