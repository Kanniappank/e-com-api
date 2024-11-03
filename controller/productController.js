const messages = require('../constant/messages')
const Error = require('../utils/errorHandler')
const Product = require('../models/productModel')
module.exports={
    getProducts:(req,res,next)=>{
        try {
            res.send({
                success:true,
                message:messages.produts.getProducts.get.success
            })
            
        } catch (error) {
            return Error.internalServerError(error)          
        }
    },
    addNewProduct:async(req,res,next)=>{
        try {
            const product = await Product.create(req.body);
            res.status(201).json({
                success:true,
                message:messages.produts.addNewProduct.success
            })
            
            
        } catch (error) {
            return Error.internalServerError(error)          
        }
    }
}