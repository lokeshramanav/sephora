const express = require('express');
const router  = express.Router();

const userController = require('../controller/user.js')

router.get('/get-all-users' , userController.getAllUsers)
router.get('/get-all-users/:userId' , userController.getProductDetailsByUserId)

module.exports = router