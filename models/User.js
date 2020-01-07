const Sequelize = require('sequelize');
const sequelize_db_conn = require('./../db/config');

const User = sequelize_db_conn.define('User', {
        first_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email_address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_logged_in: {
            type: Sequelize.DATE,
            allowNull: true
        }
}, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
});

module.exports = Organisation;