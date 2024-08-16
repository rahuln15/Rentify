

const { log } = require('console');
const Product = require('../models/Product');
const path = require('path');


// exports.createProduct = async (req, res) => {
//     try {
//         console.log('Request Body:', req.body);
//         console.log('Uploaded File:', req.file);
//         const { title, sub_title, price, category } = req.body;
//         let img = '';

//         if (req.file) {
//             img = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
//         }

//         const product = new Product({
//             title,
//             sub_title,
//             price,
//             img,
//             category
//         });

//         await product.save();
//         res.status(201).json({ success: true, data: product });
        
//     } catch (error) {
//         // console.log(error);
        
//         res.status(400).json({ success: false, error: error.message });
//     }
// };

// exports.createProduct = async (req, res) => {
//     try {
//         console.log('Request Body:', req.body); 
//         console.log('Uploaded File:', req.file); 

//         const { title, sub_title, price, category } = req.body;
//         let img = '';

//         if (req.file) {
//             img = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
//         }

//         // Validate required fields
//         if (!title || !price || !category) {
//             return res.status(400).json({ success: false, error: 'Missing required fields' });
//         }

//         const product = new Product({
//             title,
//             sub_title,
//             price,
//             img,
//             category
//         });

//         await product.save();
//         res.status(201).json({ success: true, data: product });

//     } catch (error) {
//         console.error('Error creating product:', error);
//         res.status(400).json({ success: false, error: error.message });
//     }
// };


exports.createProduct = async (req, res) => {
    try {
        console.log('Request Body:', req.body); 
        console.log('Uploaded File:', req.file);

        // If `req.file` is still undefined, log request headers and form data
        console.log('Request Headers:', req.headers);
        console.log('Form Data:', req.body);

        const { title, sub_title, price, category } = req.body;
        let img = '';

        if (req.file) {
            img = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }

        if (!title || !price || !category) {
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        const product = new Product({
            title,
            sub_title,
            price,
            img,
            category
        });

        await product.save();
        res.status(201).json({ success: true, data: product });

    } catch (error) {
        console.error('Error creating product:', error);
        res.status(400).json({ success: false, error: error.message });
    }
};

// exports.createProduct = async (req, res) => {
//     try {
//         console.log('Request Body:', req.body); 

//         const { title, sub_title, price, category, img } = req.body;

//         // Validate required fields
//         if (!title || !price || !category || !img) {
//             return res.status(400).json({ success: false, error: 'Missing required fields' });
//         }

//         const product = new Product({
//             title,
//             sub_title,
//             price,
//             img, // Store the image URL or path directly
//             category
//         });

//         await product.save();
//         res.status(201).json({ success: true, data: product });

//     } catch (error) {
//         console.error('Error creating product:', error);
//         res.status(400).json({ success: false, error: error.message });
//     }
// };




exports.getProducts = async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};

        if (category) {
            query.category = category;
        }

        const products = await Product.find(query);
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const { title, sub_title, price, category } = req.body;
        let img = req.body.img;

        if (req.file) {
            img = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { title, sub_title, price, img, category },
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
