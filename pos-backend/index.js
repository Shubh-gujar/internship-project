require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js');
const cors = require('cors');

const app = express();

// Database Connect karein
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // JSON data read karne ke liye

// Routes Connect karein
app.use('/api/products', require('./routes/productRoutes'));

// Home route (Basic check ke liye)
app.get('/', (req, res) => {
    res.send('POS API is Running fine...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));