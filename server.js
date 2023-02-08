const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors')
const app = require('./index')


// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database connection is successful for tour mangement system api`.brightCyan.bold.italic.underline)
});

// server
const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Finally it is working on port ${port}`.blue.bold.italic.underline)
})
