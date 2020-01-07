'use strict';

const DbConst = require('./../../constants/db');
const userSchema = require('./../../models/schemas/userSchema');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      DbConst.TABLE_USERS,
      userSchema
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(DbConst.TABLE_USERS);
  }
};
