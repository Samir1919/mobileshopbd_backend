const path = require('path');
// Model
const Product = require('../models/Product');

exports.getProduct = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    let products = await Product.findAll();
    try {
        if (acceptHeader.includes('text/html')) {
            // Handle web request
            res.render("backend/product", {
                layout: path.join(__dirname, "../layouts/dashboard"),
                navigation: true,
                footer: true,
                products,
            });
        } else {
            // Handle API request
            res.status(200).json(products);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
};

exports.postProduct = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    try {
        const product = new Product({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageUrl: req.body.imageUrl
        });
        const savedProduct = await product.save();
        if (acceptHeader.includes('text/html')) {
            // Handle web request
            res.redirect('product');
        } else {
            // Handle API request
            res.status(201).json(savedProduct);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    const productId = req.params.id;

    try {
        const product = await Product.findByPk(productId);

        if (!product) {
            throw new Error('product not found');
        }

        await product.destroy();

        if (acceptHeader.includes('text/html')) {
            // Handle web request
            res.redirect('/product');
        } else {
            // Handle API request
            res.status(200).json({ message: 'product deleted successfully' });
        }
    } catch (error) {
        console.error(error);

        if (error.message === 'product not found') {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};