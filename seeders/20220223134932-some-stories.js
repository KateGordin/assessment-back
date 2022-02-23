"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "first",
          content: "super interesting",
          imageUrl: "image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "second",
          content: "super good",
          imageUrl: "image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "third",
          content: "super nice",
          imageUrl: "image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fourth",
          content: "quite interesting",
          imageUrl: "image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fifth",
          content: "quite good",
          imageUrl: "image",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
