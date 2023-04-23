// executing express framework
const { config } = require('dotenv');
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRouter');

// configure dotenv
require('dotenv').config();
const port = process.env.PORT || 4000;

// app.use('/api/v1/users',userRoutes);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});



