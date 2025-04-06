const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: Number,
  product_name: String,
  brand_id: Number,
  category_id: Number,
  model_year: Number,
  list_price: Number
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);