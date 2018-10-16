const mongoose = require('mongoose');
//const MongoClient = require('mongodb').MongoClient;
const config = require('./keys');

// Mongoose setup
mongoose.connect(config.mongodbURI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log("Connect to MongoDB");
});

// MongoDB setup
// MongoClient.connect(config.mongodbURI, { useNewUrlParser: true }, (err, db) => {
//     console.log("Connect to MongoDB");
//     db.close();
// });