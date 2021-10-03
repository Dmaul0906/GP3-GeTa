"use strict";

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
      "lemari",
      [
        { gedung: "a", nomorLemari: "1" },
        { gedung: "a", nomorLemari: "2" },
        { gedung: "a", nomorLemari: "3" },
        { gedung: "b", nomorLemari: "1" },
        { gedung: "b", nomorLemari: "2" },
        { gedung: "b", nomorLemari: "3" },
        { gedung: "c", nomorLemari: "1" },
        { gedung: "c", nomorLemari: "2" },
        { gedung: "c", nomorLemari: "3" },
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
    await queryInterface.bulkDelete("lemari", null, {});
  },
};
