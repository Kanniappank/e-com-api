const products = require('../data/products.json');
const Product = require('../models/productModel')
const dotenv = require('dotenv');
const connection = require('../config/connection')

dotenv.config({ path: "config.env" })
connection.connectDB();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('products deleted');
        await Product.insertMany(products);
        console.log('Products inserted succesfully')
    } catch (error) {
        console.log(error);
    }
    process.exit();
}

seedProducts();