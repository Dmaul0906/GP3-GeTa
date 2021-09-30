"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "user",
      [
        {
          nama: "dimas",
          kota: "Depok",
          email: "dimas@gmail.com",
          password: bcrypt.hashSync("dimas123"),
          role: "admin",
        },
        {
          nama: "gilang",
          kota: "Bogor",
          email: "gilang@gmail.com",
          password: bcrypt.hashSync("gilang123"),
          role: "admin",
        },
        {
          nama: "saeful",
          kota: "Jakarta",
          email: "saeful@gmail.com",
          password: bcrypt.hashSync("gilang123"),
          role: "admin",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("user", null, {});
  },
};
