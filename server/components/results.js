const express = require('express');
const router = express.Router();

// Model
const Result = require('../models/result')

router.get('/', (req, res) => {
    const results = Result.all;
    res.send(results);
});

router.get('/random', (req, res) => {
    const result = Result.random;
    res.send(result);

})


module.exports = router;
