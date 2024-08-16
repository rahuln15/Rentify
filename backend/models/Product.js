// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product title is required'],
        trim: true
    },
    sub_title: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
    },
    img: {
        type: String,
    },
    category: { 
        type: String,
        enum: ['appliance', 'sofa', 'kitchen', 'storage', 'bed', 'bath'],
        required: [true, 'Product category is required'],
        index: true
    },
    reviews: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        reviewText: { type: String, required: true },
        rating: { type: Number, required: true, min: 1, max: 5 }
    }]
}, { timestamps: true });

// Check if the model is already defined
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
