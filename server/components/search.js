const express = require('express');
const router = express.Router();

// Model
const Result = require('../models/result')

router.get('*', (req, res) => {
    const searchResults = Result.search(req.query.q);
    res.send(searchResults);
})

module.exports = router;
