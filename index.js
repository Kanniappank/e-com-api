const express = require('express');
const dotenv = require('dotenv')
dotenv.config({path:"config.env"})
const app = express()
const path = require('path');
const cors = require('cors');
const connect=require('./config/connection');
connect.connectDB();
const { logger } = require('./middlewares/logEvents');
const errorLogger = require('./middlewares/errorLogger');
const rootRouter = require('./routes/root')
const productRouter=require('./routes/products')
const PORT = process.env.PORT || 8000
const ENV = process.env.NODE_ENV;
const whitelist = ["http://localhost:8000", "http://127.0.0.1:5500", "www.google.com", "https://www.google.com"]
const corsOptions = {
    origin: whitelist, // Allow only this origin
    methods: 'GET,POST,PATCH,DELETE', // Allow only GET and POST requests
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use('/',rootRouter  )
app.use('/api/v1',productRouter)




app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.use(errorLogger);

app.listen(PORT, () => console.log(`Server running in port ${PORT} in ${ENV}`))