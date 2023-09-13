const express = require("express");

// Create an express server app
const app = express();
// Import the task router
const task = require('./routes/task');

// Import the connectDB function to connect to MongoDB
const connectDB = require('./db/connect');
// Import dotenv to be able to use private key in '.env' file
require('dotenv').config();

// Use json middleware to accept json input
app.use(express.json());
// link task router to '/api' endpoint
app.use('/api', task)


// Define the port to use in both production and localhost
const PORT = process.env.PORT | 3000;

// Create a helper function that ensures the server won't start
// unless the connection to MongoDB is successful
const start = async () => {
    try {
        // Connect to MongoDB
        await connectDB(process.env.MONGO_URI);

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

// Call the function to connect and start the server
start();