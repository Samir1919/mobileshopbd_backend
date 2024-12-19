
const Sequelize = require('sequelize');
const DataTypes = require('sequelize');
const path = require('path');
const configPath = path.join(__dirname, '../config/database.json');
const config = require(configPath);
const sequelize = new Sequelize(config.development);

const Category = sequelize.define(
  'Category',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Category',
  });

module.exports = Category;