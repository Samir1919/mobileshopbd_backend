const express = require('express');
const router = express.Router();
// jwt auth
var auth = require('../middleware/auth');
// import controller
const categoryController = require('../controllers/categoryController');


router.get('/', categoryController.getCategory);

router.post('/', categoryController.postCategory);

router.get('/:id', categoryController.deleteCategory);






module.exports = router;