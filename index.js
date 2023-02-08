
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors')
const port = 5000


// middleware
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send('hello world from Tour Management System')
})


app.listen(port, () => {
    console.log(`Finally it is working on port ${port}`.blue.bold)
})