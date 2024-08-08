const express = require('express');
const { captureScreenshot } = require('../controllers/screenshotController');
const router = express.Router();

router.post('/', captureScreenshot);

module.exports = router;