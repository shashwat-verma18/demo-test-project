const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Company = sequelize.define('company', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    companyName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pros: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cons: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rate: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Company;