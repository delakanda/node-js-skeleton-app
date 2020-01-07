const Sequelize = require('sequelize');

const userSchema = {
    id: {
        type: Sequelize.BIGINT,
        field: 'id',
        primaryKey: true,
        allowNull: false
    },
    user_identifier: {
        type: Sequelize.STRING,
        allowNull: false
    },
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
}

module.exports = userSchema;