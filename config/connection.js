const mongoose = require('mongoose');

module.exports = {
    connectDB: () => {
        mongoose.connect(process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then((connection) => console.log(`mongodb is connected to ${connection.connection.host}`))
            .catch(err => console.log(`error in connection ${err.message}`))
    },
    
} 