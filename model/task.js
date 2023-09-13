const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxLength: [20, 'Name cannnot be more than 20 characters'],
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;