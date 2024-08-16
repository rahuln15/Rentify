// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productController');
const reviewsController = require('../controllers/reviewsController');
const { authenticate, authorizeAdmin } = require('../middlewares/authMiddleware');
const upload=require('../config/multer')

// Apply authentication middleware
// router.use(authenticate);

// Product routes
router.post('/',authenticate, authorizeAdmin,upload.single('img'), productsController.createProduct);
router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductById);
router.put('/:id',authenticate, authorizeAdmin, productsController.updateProduct);
router.delete('/:id', authenticate, authorizeAdmin, productsController.deleteProduct);

// Review routes
router.post('/reviews', authenticate, reviewsController.addReview); // Add a review
router.get('/:id/reviews', authenticate, reviewsController.getReviews); // Get reviews for a product

module.exports = router;
