const express = require('express');
const router = express.Router();

const antsCont = require('../controllers/ants.controller');

router.get('/', antsCont.getAnts);
router.get('/:species', antsCont.getAntSpecies);
router.get('/location/:location', antsCont.getAntLocation);



module.exports = router;