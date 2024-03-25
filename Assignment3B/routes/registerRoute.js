const express = require('express');
const {registerUser} = require('../controllers/registerController.js');

const router = express.Router();

router.post("", registerUser);

module.exports = router;