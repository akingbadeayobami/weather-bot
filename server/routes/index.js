'use strict';
const express = require('express');
const router = express.Router();

/* GET Route: API's Index */
router.get('/', function(req, res, next) {
    res.send({ title: 'Weather Bot' });
});

module.exports = router;