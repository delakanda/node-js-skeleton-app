const Sequelize = require('sequelize');

const DB_NAME = 'xxx';
const DB_USERNAME = 'xxx';
const DB_PASS = 'xxx';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASS, {
    host: '127.0.0.1',
    dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;

// module.exports = {
//     development: {
//         username: DB_USERNAME,
//         password: DB_PASS,
//         database: DB_NAME,
//         host: '127.0.0.1',
//         port: '5432',
//         dialect: 'postgres',
//         // use_env_variable: 'DATABASE_URL'
//     },
//     test: {
//         // dialect: 'sqlite',
//         // storage: ':memory:'
//     },
//     production: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOSTNAME,
//         port: process.env.DB_PORT,
//         dialect: 'postgres',
//         // use_env_variable: 'DATABASE_URL'
//     }
// };