const path = require('path');
// Model
const Category = require('../models/Category');

exports.getCategory = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    let products = await Category.findAll();
    try {
        if (acceptHeader.includes('text/html')) {
            // Handle web request
            res.render("backend/category", {
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

exports.postCategory = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    try {
        const category = new Category({
            name: req.body.name
        });
        const savedCategory = await category.save();
        if (acceptHeader.includes('text/html')) {
            // Handle web request
            res.redirect('category');
        } else {
            // Handle API request
            res.status(201).json(savedCategory);
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteCategory = async (req, res) => {
    const acceptHeader = req.headers['accept'];
    const categoryId = req.params.id;

    try {
        const category = await Category.findByPk(categoryId);

        if (!category) {
            throw new Error('Category not found');
        }

        await category.destroy();

        if (acceptHeader.includes('text/html')) {
            // Handle web request
            res.redirect('/category');
        } else {
            // Handle API request
            res.status(200).json({ message: 'Category deleted successfully' });
        }
    } catch (error) {
        console.error(error);

        if (error.message === 'Category not found') {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};