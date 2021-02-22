const mongoose = require("mongoose");

const product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true,
    }, 
    sectionHowMade: {
        picture: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        }
    },
    sectionConept: {
        picture: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        }
    },
    photos: [{
        type: String,
        required: true
    }]  
})

const Product = mongoose.model('Product', product);

module.exports = Product;