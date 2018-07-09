const express = require('express');
const router = express.Router();

const antsCont = require('../controllers/ants.controller');

router.get('/', antsCont.getAnts);

router.get('*', function (req, res){
    res.send('404 Not Found', 404);
});

module.exports = router;