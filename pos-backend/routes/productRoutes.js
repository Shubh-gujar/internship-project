const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// 1. Naya Product add karne ke liye (POST request)
// URL: http://localhost:5000/api/products/add
router.post('/add', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 2. Saare Products dekhne ke liye (GET request)
// URL: http://localhost:5000/api/products/all
router.get('/all', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;