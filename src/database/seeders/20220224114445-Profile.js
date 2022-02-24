"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Profiles",
      [
        {
          age: 23,
          gender: "male",
          education: "secondary",
          address: "Kigali-Rwanda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("Profiles", null, {}),
};
