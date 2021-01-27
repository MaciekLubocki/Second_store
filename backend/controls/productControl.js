const Product = require('../models/productModel.js');

const productControls = {
    getAllProducts: async (req, res, next) => {
        try {
            const products = await Product.find();
            res.send(products);
        } catch (error) {
            res.status(500).send('Internal server error :P');
        }
    },
    addNewProducts: async (req, res, next) => {
        try {
            const {cost, name} = req.body;
            const product = new Product({cost, name});
            await product.save();

            res.send(product);
        } catch (error) {
            res.status(500).send('Internal server error :P');
        }
    },
    updateProduct: async (req, res, next) => {
        try {
            const {cost, name} = req.body;
            const {id} = req.params;
            await Product.findByIdAndUpdate(id, {
                cost,
                name
            })

            res.send('Success');
        } catch (error) {
            res.status(500).send('Internal server error :P');
        }
    },
    deleteProduct: async (req, res, next) => {
        try {
            const {id} = req.params;
            await Product.findByIdAndDelete(id)

            res.send('Success');
        } catch (error) {
            res.status(500).send('Internal server error :P');
        }
    },
}



module.exports = productControls;