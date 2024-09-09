const express = require('express');
const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
    res.send('Hi peps');
})

module.exports = rootRouter