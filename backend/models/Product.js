const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Product = sequelize.define('Product', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  sellerId:    { type: DataTypes.INTEGER, allowNull: false },
  name:        { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  price:       { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  category:    { type: DataTypes.STRING, allowNull: false },
  location:    { type: DataTypes.STRING, allowNull: true },
  stock:       { type: DataTypes.INTEGER, defaultValue: 1 },
  images:      { type: DataTypes.JSON, allowNull: true },
  isActive:    { type: DataTypes.BOOLEAN, defaultValue: true },
}, { timestamps: true });

module.exports = Product;
