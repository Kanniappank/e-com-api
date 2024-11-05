const express = require('express');
const { getProducts, addNewProduct,getProductById } = require('../controller/productController');
const response = require('../config/response')
const productRouter = express.Router();
const validation = require("express-joi-validator");
const productSchema = require('../schema/products')


productRouter.get('/products',async(req,res,next)=>{
    try {
    
        const result = await getProducts(req,res,next)
        // return response.send({result,res});

        
    } catch (error) {
        return next(error);
        
    }
})

// productRouter.route('/products').post(addNewProduct)
productRouter.get('/products/:id',async(req,res,next)=>{
    try {
        console.log('controll comes into route',req.params.id)
    const result = await getProductById(req,res,next);
    // return response.send({result,res})
        
    } catch (error) {
        return next(error);
        
    }
})
productRouter.post('/products',async(req,res,next)=>{
    try {
        const result = await addNewProduct(req,res,next)
        // return response.send({result,res});
        
    } catch (error) {
        return next(error);
    }
})

module.exports = productRouter