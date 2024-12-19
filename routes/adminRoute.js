const express = require('express');
const router = express.Router();
// jwt auth
var auth = require('../middleware/auth');
// import controller
const adminController = require('../controllers/adminController');


router.get('/', adminController.adminPage);

// router.post('/',adminController);






module.exports = router;