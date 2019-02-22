"use strict";
const faker = require("faker")
const uuidv3 = require('uuid/v1');

console.log()
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Contacts",
      [
        {
          id:1,
          name: "Rodgers Kishagha",
          phone: "0792847684",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past(),
          
        },
        {
          id:2,
          name: "Michael Owiri",
          phone: "0892222",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:3,
          name: "Obiero Samuel",
          phone: "0388383883",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:4,
          name: "Akindiva Joel",
          phone: "0093832",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:5,
          name: "Muriuki Mutoro",
          phone: "09394884",
          createdAt: faker.date.past(), 
          updatedAt: faker.date.past()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Contacts", null, {});
  }
};
