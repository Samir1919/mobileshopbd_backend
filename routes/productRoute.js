const express = require('express');
const router = express.Router();
// jwt auth
var auth = require('../middleware/auth');
// import controller
const productController = require('../controllers/productController');


router.get('/', productController.getProduct);

router.post('/', productController.postProduct);

router.get('/:id', productController.deleteProduct);






module.exports = router;