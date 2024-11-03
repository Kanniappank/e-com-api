const Joi = require('joi');
module.exports={
    products:{
        body: Joi.object().keys({
            name:Joi.string(),
        }).required()
    },

}