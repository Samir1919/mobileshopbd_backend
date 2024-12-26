const path = require('path');
// Model
const Product = require('../models/Product');
const Category = require('../models/Category');

exports.getProduct = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    try {
        // Fetch products including related categories
        const products = await Product.findAll({
            include: {
                model: Category
            }
        });
        const categories = await Category.findAll();

        if (acceptHeader.includes('text/html')) {
            // Render HTML page with products
            res.render("backend/product", {
                layout: path.join(__dirname, "../layouts/dashboard"),
                navigation: true,
                footer: true,
                products,
                categories
            });
        } else {
            // Return API response with products
            res.status(200).json({ products, categories });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.postProduct = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    try {
        // Get image URL or null if no image uploaded
        const imageUrl = req.file ? `/uploads/${path.basename(req.file.path)}` : null; // Save relative path

        // Create new product instance
        const product = new Product({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageUrl: imageUrl, // Use the uploaded image URL
            categoryId: req.body.categoryId
        });

        // Save the product to the database
        const savedProduct = await product.save();

        if (acceptHeader.includes('text/html')) {
            // Handle web request: Redirect after successful creation
            res.redirect('/product'); // Redirect to the products page
        } else {
            // Handle API request: Return the saved product as JSON
            res.status(201).json(savedProduct);
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message }); // Return error message if the product creation fails
    }
};

// New Edit Product Functionality
exports.editProduct = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    const productId = req.params.id;

    try {
        // Find the product by ID
        const product = await Product.findByPk(productId);

        if (!product) {
            throw new Error('Product not found');
        }

        // If a new image is uploaded, update the imageUrl
        const imageUrl = req.file ? `/uploads/${path.basename(req.file.path)}` : product.imageUrl; // Keep old image if no new image

        // Update the product with new details
        product.title = req.body.title || product.title;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.imageUrl = imageUrl;
        product.categoryId = req.body.categoryId || product.categoryId;

        // Save the updated product
        const updatedProduct = await product.save();

        if (acceptHeader.includes('text/html')) {
            // Handle web request: Redirect after successful update
            res.redirect('/product'); // Redirect to the products page
        } else {
            // Handle API request: Return the updated product as JSON
            res.status(200).json(updatedProduct);
        }
    } catch (error) {
        console.error(error);

        if (error.message === 'Product not found') {
            // Handle product not found error
            res.status(404).json({ error: error.message });
        } else {
            // Handle internal server error
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

exports.deleteProduct = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    const productId = req.params.id;

    try {
        // Find the product by ID
        const product = await Product.findByPk(productId);

        if (!product) {
            throw new Error('Product not found');
        }

        // Delete the product
        await product.destroy();

        if (acceptHeader.includes('text/html')) {
            // Handle web request: Redirect after successful deletion
            res.redirect('/product'); // Redirect to the products page
        } else {
            // Handle API request: Return success message as JSON
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    } catch (error) {
        console.error(error);

        if (error.message === 'Product not found') {
            // Handle product not found error
            res.status(404).json({ error: error.message });
        } else {
            // Handle internal server error
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};
