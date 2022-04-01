require('dotenv').config();

const mongoose = require('mongoose');

function connectDB() {
    //Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
             
        }).catch((err)=>console.log('err', err))
        const connection = mongoose.connection;
        connection.once('open', function () {
            console.log('MongoDB running');
          })
          .on('error', function (err) {
            console.log(err);
          });

}

module.exports = connectDB