const express = require('express');
const router = express.Router();
const api = require('./api')

router.get('/api/infected', api.getInfected)
router.post('/api/infected', api.postInfected)

module.exports = router