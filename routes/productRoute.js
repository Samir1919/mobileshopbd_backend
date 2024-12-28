const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// JWT authentication middleware (import if needed in future)
const auth = require('../middleware/auth');

// Import product controller
const productController = require('../controllers/productController');

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/')); // Correct path to uploads directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Generate unique filename
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, and JPG are allowed.'));
    }
};

const upload = multer({
    storage,
    fileFilter,
});

// Routes
router.get('/', productController.getProduct); // Get all products
router.post('/', upload.single('image'), productController.postProduct); // Create product with single image upload
router.post('/:id', upload.single('image'), productController.editProduct); // PUT route for editing a product
router.get('/:id', productController.deleteProduct); // Delete a product by ID

module.exports = router;
