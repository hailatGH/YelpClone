require('dotenv').config();

const { raw } = require('express');
const express = require('express');
const morgan = require('morgan');
const db = require('./db');
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Get All Restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM restaurants');
        res.json({
            status: "Success",
            results: results.rowCount,
            data: {
                restaurants: results.rows
            },
        });
    } catch(err) {
        console.log(err);
    }
});

// Get individual Restaurants
app.get('/api/v1/restaurants/:id', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM restaurants WHERE id = $1', [req.params.id]);
        res.json({
            status: "Success",
            data: {
                restaurants: results.rows[0]
            },
        });
    } catch(err) {
        console.log(err);
    }
});

// Create a Restaurant
app.post('/api/v1/restaurants', async (req, res) => {
    try {
        const results = await db.query('INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *', [req.body.name, req.body.location, req.body.price_range]);
        res.json({
            status: "Success",
            data: {
                restaurants: results.rows[0]
            },
        });
    } catch(err) {
        console.log(err);
    }
});

// Update The Restaurant
app.put('/api/v1/restaurants/:id', async (req, res) => {
    try {
        const results = await db.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *', [req.body.name, req.body.location, req.body.price_range, req.params.id]);
        res.json({
            status: "Success",
            data: {
                restaurant: results.rows[0]
            },
        });
    } catch(err) {
        console.log(err);
    }
});

// Delete A Restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
    try {
        const results = await db.query('DELETE FROM restaurants WHERE id = $1 returning *', [req.params.id]);
        res.json({
            status: "Success",
        });
    } catch(err) {
        console.log(err);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log(`Server is up and listening on port ${port}`);
});