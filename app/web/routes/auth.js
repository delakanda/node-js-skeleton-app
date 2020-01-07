const express = require('express');
const router = express.Router({ mergeParams: true });

const userController = require('../controllers/userController');

router.route('/').post(userController.authenticateUser);

module.exports = router;