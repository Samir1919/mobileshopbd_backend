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
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING, // Single image URL
      allowNull: true, // Allow null in case there's no image
    },
    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Product',
  }
);

// Optional: Define associations
// Category.hasMany(Product);
// Product.belongsTo(Category);

module.exports = Product;
