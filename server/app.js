// Required Modules
const express = require('express');
const cors = require('cors');

// Required files
const resultRoutes = require('./components/results');
const searchQueries = require('./components/search');


const app = express();

app.use(cors());

app.use('/results', resultRoutes);
app.use('/search', searchQueries);

app.get('/', (req, res) => {
    res.send('Noodle API');
})


module.exports = app;