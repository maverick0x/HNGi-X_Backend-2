const Person = require('../model/task');

// CREATE: '/api' - Adding a new person
const createPerson = async (req, res) => {
    try {
        // Get the data from the body of the request
        const { name, email, gender } = req.body;

        // Check if the user already exists
        let person = await Person.findOne({ name });

        // If the user does not already exist
        if (!person) {
            // Create the new user and save it
            person = await Person.create({
                name,
                email,
                gender,
            });

            // Return a success message
            res.status(201).json({
                success: `Person '${name}' created successfully...!`,
                person,
            });
        } else {
            // Return a conflict message
            res.status(409).json({
                error: `Person '${name}' already exists...!`
            });
        }
    } catch (error) {
        // Return the error message
        res.status(500).json({ error });
    }
}

// READ: '/api/user_id' - Fetching details of a person
const getPerson = async (req, res) => {
    try {
        const user_id = req.params.user_id;

        // Check if the user already exists
        let person = await Person.findOne({ name: user_id });

        if (person) {
            // Return a success message
            res.status(200).json({
                success: `Person data found..!`,
                data: person
            });
        } else {
            // Return a 404 error message
            res.status(404).json({ error: `Person '${user_id}' is not in our database..!` });
        }
    } catch (error) {
        // Return the error message
        res.status(500).json({ error });
    }
}

// UPDATE: '/api/user_id' - Modifying details of an existing person
const updatePerson = async (req, res) => {
    try {
        const user_id = req.params.user_id;

        // Check if the user already exists
        let person = await Person.findOne({ name: user_id });

        if (person) {
            const { name, email, gender } = req.body;
            await person.updateOne({
                name,
                email,
                gender,
            }, {
                runValidators: true
            });

            // Return a success message
            res.status(200).json({
                success: `Person '${user_id}' data modified successfully..!`,
            });
        } else {
            // Return a 404 error message
            res.status(404).json({ error: `Person '${user_id}', is not in our database..!` });
        }
    } catch (err) {
        // Return the error message
        res.status(500).json({ error: err });
    }
}

// DELETE: '/api/user_id' - Removing a person
const deletePerson = async (req, res) => {
    try {
        const user_id = req.params.user_id;

        // Check if the user already exists
        let person = await Person.findOne({ name: user_id });

        if (person) {
            await person.deleteOne();

            // Return a success message
            res.status(200).json({
                success: `Person '${user_id}' deleted successfully..!`,
            });
        } else {
            // Return a 404 error message
            res.status(404).json({ error: `Person '${user_id}', is not in our database..!` });
        }
    } catch (err) {
        // Return the error message
        res.status(500).json({ error: err });
    }
}


// Export the controller functions
module.exports = {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson,
}