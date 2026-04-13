const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: String },
  stock: { type: Number, default: 0 },
  variants: [{ size: String, color: String, price: Number }]
});

module.exports = mongoose.model('Product', ProductSchema);

