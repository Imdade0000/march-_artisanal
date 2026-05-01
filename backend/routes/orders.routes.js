const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// POST /api/orders           → Créer une commande (public)
router.post('/', ordersController.create);

// GET /api/orders/seller     → Commandes reçues par le vendeur connecté
router.get('/seller', authMiddleware, ordersController.getSellerOrders);

// PUT /api/orders/:id/status → Changer le statut d'une commande
router.put('/:id/status', authMiddleware, ordersController.updateStatus);

module.exports = router;
