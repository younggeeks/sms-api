"use strict";
const faker = require("faker");
const uuidv1 = require('uuid/v1');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Sms",
      [
        {
          id:uuidv1(),
          message: "mwambie deree acome na kamzigo",
          status: "read",
          senderId: "2e77e154-3568-11e9-b210-d663bd873d93",
          receiverId: "2e77e406-3568-11e9-b210-d663bd873d93",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:uuidv1(),
          message: "Jamaa kasema anachelewa so we tangulia tu",
          status: "unread",
          senderId: "2e77e406-3568-11e9-b210-d663bd873d93",
          receiverId: "2e77e154-3568-11e9-b210-d663bd873d93",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:uuidv1(),
          message: "mwambie deree acome na kamzigo",
          status: "read",
          senderId: "2e77e55a-3568-11e9-b210-d663bd873d93",
          receiverId: "2e77e6a4-3568-11e9-b210-d663bd873d93",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:uuidv1(),
          message: "mwambie deree acome na kamzigo",
          status: "read",
          senderId: "2e77e6a4-3568-11e9-b210-d663bd873d93",
          receiverId:"2e77e55a-3568-11e9-b210-d663bd873d93",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:uuidv1(),
          message: "mwambie deree acome na kamzigo",
          status: "read",
          senderId: "2e77e7e4-3568-11e9-b210-d663bd873d93",
          receiverId: "2e77e6a4-3568-11e9-b210-d663bd873d93",
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
