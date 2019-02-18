"use strict";
const faker = require("faker")
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Contacts",
      [
        {
          name: "Rodgers Kishagha",
          phone: "0792847684",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past(),
          
        },
        {
          name: "Michael Owiri",
          phone: "0892222",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          name: "Obiero Samuel",
          phone: "0388383883",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          name: "Akindiva Joel",
          phone: "0093832",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
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
      return queryInterface.bulkDelete('Contacts', null, {});
  }
};
