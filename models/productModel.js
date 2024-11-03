const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"],
        trim: true,
        maxLenth: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    ratings: {
        type: String,
        default: 0,
    },
    images: [
        {
            image: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Product category is reqired'],
        enum: {
            values: [
                'Electronics',
                'Mobile Phone',
                'Laptops',
                'Accessories',
                'Head Phones',
                'Food',
                'Books',
                'Clothes',
                'Shoes',
                'Beauty',
                'Health',
                'Sports',
                'Outdoor',
                'Home Decors'
            ],
            message: "Please select a correct category"
        }
    },
    seller: {
        type: String,
        required: [true, 'Seller Name is required']
    },
    stock: {
        type: Number,
        required: [true, 'Please Enter Product Stock'],
        maxLenth: [20, 'Product Stock cannot exceed 20']
    },
    noOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
