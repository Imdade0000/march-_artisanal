const Product = require('../models/Product');
const { Op } = require('sequelize');

// GET /api/products
exports.getAll = async (req, res) => {
  try {
    const { category, location, minPrice, maxPrice, sellerId } = req.query;
    const where = { isActive: true };
    if (category) where.category = category;
    if (location) where.location = location;
    if (sellerId) where.sellerId = sellerId;
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price[Op.gte] = parseFloat(minPrice);
      if (maxPrice) where.price[Op.lte] = parseFloat(maxPrice);
    }
    const products = await Product.findAll({ where, order: [['createdAt', 'DESC']] });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/products/:id
exports.getById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Produit introuvable.' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/products
exports.create = async (req, res) => {
  try {
    const { name, description, price, category, location, stock, images } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ error: 'Nom, prix et catégorie requis.' });
    }
    const product = await Product.create({
      sellerId: req.user.id, name, description, price, category, location, stock, images,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/products/:id
exports.update = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Produit introuvable.' });
    if (product.sellerId !== req.user.id) return res.status(403).json({ error: 'Non autorisé.' });
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/products/:id
exports.remove = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Produit introuvable.' });
    if (product.sellerId !== req.user.id) return res.status(403).json({ error: 'Non autorisé.' });
    await product.destroy();
    res.json({ message: 'Produit supprimé.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
