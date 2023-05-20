const mongoose = require('mongoose');

mongoose.set('strictQuery', false); // Add this line before connecting

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
