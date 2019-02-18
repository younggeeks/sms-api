"use strict";
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Sms",
      [
        {
          message: "mwambie deree acome na kamzigo",
          status: "read",
          senderId: 1,
          receiverId: 4,
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          message: "Jamaa kasema anachelewa so we tangulia tu",
          status: "unread",
          senderId: 5,
          receiverId: 2,
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          message: "mwambie deree acome na kamzigo",
          status: "read",
          senderId: 2,
          receiverId: 5,
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          message: "mwambie deree acome na kamzigo",
          status: "read",
          senderId: 3,
          receiverId: 1,
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          message: "mwambie deree acome na kamzigo",
          status: "read",
          senderId: 4,
          receiverId: 3,
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
   
      Example:
      return queryInterface.bulkDelete('Sms', null, {});
  }
};
