const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Seller = sequelize.define('Seller', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId:      { type: DataTypes.INTEGER, allowNull: false },
  shopName:    { type: DataTypes.STRING, allowNull: false },
  bio:         { type: DataTypes.TEXT, allowNull: true },
  location:    { type: DataTypes.STRING, allowNull: true },
  avatar:      { type: DataTypes.STRING, allowNull: true },
  coverImage:  { type: DataTypes.STRING, allowNull: true },
  whatsapp:    { type: DataTypes.STRING, allowNull: true },
}, { timestamps: true });

module.exports = Seller;
