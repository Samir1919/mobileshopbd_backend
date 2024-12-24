const crypto = require('crypto-js');
const Sequelize  = require('sequelize');
const DataTypes  = require('sequelize');
const path = require('path');
const configPath = path.join(__dirname, '../config/database.json');
const config = require(configPath);
const sequelize = new Sequelize(config.development);

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            is: /^\d{11}$/ // Example validation for 11-digit phone numbers
        }
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    vendor: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const hash = crypto.SHA256(value).toString();
            this.setDataValue('password', hash);
        }
    }
}, {
    sequelize,
    modelName: 'User',
});

module.exports = User;