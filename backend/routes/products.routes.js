const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// GET /api/products          → Liste (filtres: category, location, price)
router.get('/', productsController.getAll);

// GET /api/products/:id      → Détail d'un produit
router.get('/:id', productsController.getById);

// POST /api/products         → Créer (vendeur authentifié)
router.post('/', authMiddleware, productsController.create);

// PUT /api/products/:id      → Modifier (vendeur authentifié)
router.put('/:id', authMiddleware, productsController.update);

// DELETE /api/products/:id   → Supprimer (vendeur authentifié)
router.delete('/:id', authMiddleware, productsController.remove);

module.exports = router;
