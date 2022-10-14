require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Get All Restaurants
app.get('/api/v1/restaurants', (req, res) => {
    res.json({
        status: "Success",
        data:{
            restaurants: ['Macdonalds', 'Wendys'],
        },
    });
});

// Get individual Restaurants
app.get('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "Success",
        data:{
            restaurants: ['Macdonalds'],
        },
    });
});

// Create a Restaurant
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "Success",
        data:{
            restaurants: ['Macdonalds'],
        },
    });
});

// Update The Restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "Success",
        data:{
            restaurants: ['Macdonalds'],
        },
    });
});

// Delete A Restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
    res.status(204).json({
        status: "Success",
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log(`Server is up and listening on port ${port}`);
});