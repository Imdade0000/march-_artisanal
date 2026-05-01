const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Order = sequelize.define('Order', {
  id:        { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  buyerName: { type: DataTypes.STRING, allowNull: false },
  buyerPhone:{ type: DataTypes.STRING, allowNull: false },
  productId: { type: DataTypes.INTEGER, allowNull: false },
  sellerId:  { type: DataTypes.INTEGER, allowNull: false },
  quantity:  { type: DataTypes.INTEGER, defaultValue: 1 },
  totalPrice:{ type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status:    { type: DataTypes.ENUM('pending', 'confirmed', 'delivered', 'cancelled'), defaultValue: 'pending' },
  channel:   { type: DataTypes.ENUM('whatsapp', 'email'), defaultValue: 'whatsapp' },
  note:      { type: DataTypes.TEXT, allowNull: true },
}, { timestamps: true });

module.exports = Order;
