require('dotenv').config();

module.exports = {
    "development": {
        username: process.env.APP_DB_USERNAME,
        password: process.env.APP_DB_PASSWORD,
        database: process.env.APP_DB_NAME,
        host: process.env.APP_DB_HOST,
        dialect: process.env.APP_DB_DIALECT
    }
}