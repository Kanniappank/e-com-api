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
            const products = await Product.findById(req.params.id);
            if (!products) {
                return res.send({
                    success: false,
                    message: messages.products.get.notFound,
                })
            }
            res.send({
                success: true,
                message: messages.products.get.success,
                products
            })
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }
    },
    updateProduct: async (req, res, next) => {
        try {
            let product = await Product.findById(req.params.id);
            if (!product) {
                return res.send({
                    success: false,
                    message: messages.products.get.notFound,
                })
            }
            product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                success: true,
                message: messages.products.update.success,
                product,
            })
        } catch (error) {
            res.send({
                success: false,
                message: error
            })
        }

    },
    deleteProduct: async (req, res, next) => {

        try {
            let product = await Product.findById(req.params.id);
            if (!product) {
                return res.send({
                    success: false,
                    message: messages.products.get.notFound,
                })
            }
            await product.remove();
            res.status(200).json({
                success: true,
                message: messages.products.delete.success
            })


        } catch (error) {
            console.log({error} )
            res.send({
                success: false,
                message: error
            })
        }
    }
}