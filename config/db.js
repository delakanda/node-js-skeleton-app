const Sequelize = require('sequelize');

const DB_NAME = process.env.APP_DB_NAME;
const DB_USERNAME = process.env.APP_DB_USERNAME;
const DB_PASS = process.env.APP_DB_PASSWORD;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASS, {
    host: process.env.APP_DB_HOST,
    dialect: process.env.APP_DB_DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;