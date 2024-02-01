
const mongoose = require('mongoose');

MONGODB_URL = 'mongodb://127.0.0.1:27017/managment';

mongoose.connection.once('open', () => {
    console.log("MongoDB Connection Ready!!!!");
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

module.exports = MONGODB_URL;