// Dependencies
let mongoose = require('mongoose');

// Schema
var productSchema = new mongoose.Schema({
      name: String,
      description: String,
      price: Number,
      img: String,
      medicinefor: Array,
      ratings: Number
});

// Return model
module.exports = mongoose.model('Products', productSchema);
