const exp = require('constants');
const express = require('express');
const app = express()
const path = require('path');
const {logger} = require('./middlewares/logEvents');
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hi peps');
})

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))