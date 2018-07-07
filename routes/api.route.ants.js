const express = require('express');
const router = express.Router();

const antsCont = require('../controllers/ants.controller');

router.get('/', antsCont.getAnts);

module.exports = router;