"use strict";
const faker = require("faker")
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Contacts",
      [
        {
          id:"2e77e154-3568-11e9-b210-d663bd873d93",
          name: "Rodgers Kishagha",
          phone: "0792847684",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past(),
          
        },
        {
          id:"2e77e406-3568-11e9-b210-d663bd873d93",
          name: "Michael Owiri",
          phone: "0892222",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:"2e77e55a-3568-11e9-b210-d663bd873d93",
          name: "Obiero Samuel",
          phone: "0388383883",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:"2e77e6a4-3568-11e9-b210-d663bd873d93",
          name: "Akindiva Joel",
          phone: "0093832",
          createdAt: faker.date.past(),
          updatedAt: faker.date.past()
        },
        {
          id:"2e77e7e4-3568-11e9-b210-d663bd873d93",
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
