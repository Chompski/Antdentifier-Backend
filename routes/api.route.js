const express = require('express');
const router = express.Router();

const antsRoute = require('./api.route.ants');

router.use('/ants', antsRoute );

module.exports = router;