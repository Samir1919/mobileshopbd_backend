const Sequelize = require('sequelize');
const DataTypes = require('sequelize');
const path = require('path');
const configPath = path.join(__dirname, '../config/database.json');
const config = require(configPath);
const sequelize = new Sequelize(config.development);

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Product',
  });

module.exports = Product;
