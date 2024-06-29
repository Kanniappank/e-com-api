const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');
const { logger } = require('./middlewares/logEvents');
const errorHandler = require('./middlewares/errorLogger');
const PORT = process.env.PORT || 8000;
const whitelist = ["http://localhost:8000","http://127.0.0.1:5500","www.google.com","https://www.google.com"]
corsOption = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) != -1) {
            callback(null, true)
        }
        else {
            callback(new Error('Not Allowed by cors'))
        }
    },
    optionsSuccessStatus:200,
}

app.use(cors(corsOption));

app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req, res) => {

    res.send('Hi peps');
})

app.use(errorHandler);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))