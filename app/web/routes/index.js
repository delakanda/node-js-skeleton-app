const express = require('express');
const auth = require('./auth');

const router = express.Router();

router.use('/authenticate', auth);

module.exports = router;