"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          googleId: "4343434n3hgf5678",
          givenName: "RIchard",
          familyName: "kevin",
          email: "richkevin@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("Users", null, {}),
};
