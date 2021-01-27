const mongoose = require("mongoose");

const product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', product);

module.exports = Product;