const messages = require('../constant/messages')
const Error = require('../utils/errorHandler')
const Product = require('../models/productModel')
module.exports = {
    getProducts: async (req, res, next) => {
        try {
            const products = await Product.find();
            res.send({
                success: true,
                message: messages.products.get.success,
                count: products.length,
                data: products,
            })

        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    addNewProduct: async (req, res, next) => {
        try {
            console.log('control comes into add new product function')
            const product = await Product.create(req.body);
            console.log('after api call', product);
            console.log('logging res', res)
            res.status(201).json({
                success: true,
                message: messages.products.post.success
            })
        } catch (error) {
            console.log('control comes into catch')
            // return Error.internalServerError(error)  
            res.send({
                success: false,
                message: error
            })
        }
    },
    getProductById: async (req, res, next) => {
        try {
            const products = await Product.findById(req.parms.id);
            console.log('control comes into get products by id',req.parms.id,products)
            if (!products) {
                return res.send({
                    success: false,
                    message: messages.products.get.notFound,
                })
            }
            res.send({
                success:true,
                message:messages.products.get.success,
                products
            })
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    }
}