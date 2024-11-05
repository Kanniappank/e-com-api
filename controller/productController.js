const messages = require('../constant/messages')
const Error = require('../utils/errorHandler')
const Product = require('../models/productModel')
module.exports = {
    getProducts: async (req, res, next) => {
        try {
            const products = await Product.find();
            console.log('products :', products)
            res.send({
                success: true,
                message: messages.produts.getProducts.get.success,
                data: products
            })

        } catch (error) {
            return Error.internalServerError(error)
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
    }
}