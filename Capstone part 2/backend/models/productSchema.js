const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: {
    type: String,
  },
  productName: {
    type: String,
  },
  productQuantity: {
    type: Number,
  },
});

//make a collection
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
