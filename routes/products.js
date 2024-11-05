const express = require('express');
const { getProducts, addNewProduct } = require('../controller/productController');
const response = require('../config/response')
const productRouter = express.Router();
const validation = require("express-joi-validator");
const productSchema = require('../schema/products')


productRouter.get('/products',async(req,res,next)=>{
    try {
    
        const result = await getProducts(req,res,next)
        
        
    } catch (error) {
        
    }
})

// productRouter.route('/products').post(addNewProduct)
productRouter.post('/products',async(req,res,next)=>{
    try {
        const result = await addNewProduct(req,res,next)
        return response.send({result,res});
        
    } catch (error) {
        return next(error);
    }
})

module.exports = productRouter