const Sequelize = require('sequelize');
const sequelize_db_conn = require('./../db/config');

const User = sequelize_db_conn.define('User', {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email_address: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
}, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
});

module.exports = Organisation;