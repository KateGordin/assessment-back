"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Born and raised in Philly",
          description: "It was long story",
          backgroundColor: "white",
          color: "black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "How I became a programmer",
          description: "It was short story",
          backgroundColor: "white",
          color: "black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "How and why",
          description: "It was nice story",
          backgroundColor: "white",
          color: "black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Where and when",
          description: "It was weird story",
          backgroundColor: "white",
          color: "black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
