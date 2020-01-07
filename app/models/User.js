const Sequelize = require('sequelize');
const sequelize_db_conn = require('./../db/config');
const userSchema = require('./schemas/userSchema');

const User = sequelize_db_conn.define('User', userSchema, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
});

module.exports = User;