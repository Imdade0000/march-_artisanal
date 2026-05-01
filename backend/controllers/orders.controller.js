const Order = require('../models/Order');
const Product = require('../models/Product');

// POST /api/orders
exports.create = async (req, res) => {
  try {
    const { buyerName, buyerPhone, productId, quantity, channel, note } = req.body;
    if (!buyerName || !buyerPhone || !productId) {
      return res.status(400).json({ error: 'Nom, téléphone et produit requis.' });
    }
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ error: 'Produit introuvable.' });

    const totalPrice = product.price * (quantity || 1);
    const order = await Order.create({
      buyerName, buyerPhone, productId, sellerId: product.sellerId,
      quantity: quantity || 1, totalPrice, channel: channel || 'whatsapp', note,
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/orders/seller
exports.getSellerOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { sellerId: req.user.id },
      order: [['createdAt', 'DESC']],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/orders/:id/status
exports.updateStatus = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Commande introuvable.' });
    if (order.sellerId !== req.user.id) return res.status(403).json({ error: 'Non autorisé.' });
    await order.update({ status: req.body.status });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
