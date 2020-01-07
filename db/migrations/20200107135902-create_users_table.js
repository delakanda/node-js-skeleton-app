'use strict';

const DbConst = require('../../app/constants/db');
const userSchema = require('./../../app/models/schemas/userSchema');

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
