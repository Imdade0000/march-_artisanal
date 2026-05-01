const Seller = require('../models/Seller');
const Product = require('../models/Product');

// GET /api/sellers
exports.getAll = async (req, res) => {
  try {
    const sellers = await Seller.findAll({ order: [['createdAt', 'DESC']] });
    res.json(sellers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/sellers/:id
exports.getById = async (req, res) => {
  try {
    const seller = await Seller.findByPk(req.params.id);
    if (!seller) return res.status(404).json({ error: 'Vendeur introuvable.' });
    const products = await Product.findAll({ where: { sellerId: seller.id, isActive: true } });
    res.json({ seller, products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/sellers/profile
exports.updateProfile = async (req, res) => {
  try {
    const seller = await Seller.findOne({ where: { userId: req.user.id } });
    if (!seller) return res.status(404).json({ error: 'Profil vendeur introuvable.' });
    await seller.update(req.body);
    res.json(seller);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
