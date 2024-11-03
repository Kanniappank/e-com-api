const express = require('express');
const { getProducts, addNewProduct } = require('../controller/productController');
const productRouter = express.Router();

productRouter.route('/products').get(getProducts)
productRouter.route('/products').post(addNewProduct)

module.exports = productRouter