const express = require('express');
const router = express.Router();
// jwt auth
var auth = require('../middleware/auth');
// import controller
const loginController = require('../controllers/loginController');


router.get('/',loginController.loginPage);

router.post('/',loginController.login);






module.exports = router;