const express = require('express');
const router = express.Router();
const sellersController = require('../controllers/sellers.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// GET /api/sellers           → Liste des vendeurs
router.get('/', sellersController.getAll);

// GET /api/sellers/:id       → Profil public d'un vendeur
router.get('/:id', sellersController.getById);

// PUT /api/sellers/profile   → Modifier son propre profil vendeur
router.put('/profile', authMiddleware, sellersController.updateProfile);

module.exports = router;
