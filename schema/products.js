const Joi = require('joi');
module.exports = {
    products: Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.number().required(),
        ratings: Joi.number().required(),
        images: Joi.array().required(),
        category: Joi.string().required(),
        seller: Joi.string().required(),
        stock: Joi.number().required(),
        noOfReviews: Joi.number().optional(),
        reviews: Joi.array().items({
            name: Joi.string().trim().required(),
            rating: Joi.string().trim().required(),
            comment: Joi.string().trim().required(),
        })
    }),
}