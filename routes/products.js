const express = require('express');
const { getProducts, addNewProduct, getProductById,updateProduct,deleteProduct } = require('../controller/productController');
const response = require('../config/response')
const productRouter = express.Router();
const validation = require("express-joi-validator");
const productSchema = require('../schema/products')


productRouter.get('/products', async (req, res, next) => {
    try {

        const result = await getProducts(req, res, next)
        // return response.send({result,res});


    } catch (error) {
        return next(error);

    }
})

// productRouter.route('/products').post(addNewProduct)
productRouter.get('/product/:id', async (req, res, next) => {
    try {
        const result = await getProductById(req, res, next);

    } catch (error) {
        return next(error);

    }
})

productRouter.put('/product/:id', async (req, res, next) => {
    try {
        const result = await updateProduct(req, res, next);

    } catch (error) {
        return next(error);

    }
})

productRouter.delete('/product/:id', async (req, res, next) => {
    try {
        const result = await deleteProduct(req, res, next);

    } catch (error) {
        return next(error);

    }
})

productRouter.post('/products', async (req, res, next) => {
    try {
        const result = await addNewProduct(req, res, next)
        // return response.send({result,res});

    } catch (error) {
        return next(error);
    }
})

module.exports = productRouter