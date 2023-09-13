const mongoose = require('mongoose');

// Create a function to connect to mongoDB
const connectDB = (url) => mongoose.connect(url);

// Export the function the function;
module.exports = connectDB