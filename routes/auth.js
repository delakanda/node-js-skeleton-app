const express = require('express');
const router = express.Router({ mergeParams: true });

const authController = require('../controllers/authController');

router.route('/').post(authController.auth);

module.exports = router;