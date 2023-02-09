
const express = require('express');
const app = express();
const cors = require('cors');




// middleware
app.use(express.json());
app.use(cors());

// routes
const tourRoute = require('./Routes/Tours.route.js')



app.get('/', (req, res) => {
    res.send('hello world from Tour Management System')
})

// posting to database

app.use('/api/v1/tours', tourRoute)


module.exports = app;