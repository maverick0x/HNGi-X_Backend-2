const mongoose = require('mongoose');

// Define a schema for Person resource
const PersonSchema = new mongoose.Schema({
    // All schema must contain 'name' data
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxLength: [20, 'Name cannnot be more than 20 characters'],
    },
    // 'email' data is optional
    email: {
        type: String
    },
    // 'gender' data is optional
    gender: {
        type: String
    },
});

// Create a mongoose model to link 'person' collection with schema
const Person = mongoose.model("Person", PersonSchema);


// Export the model
module.exports = Person;