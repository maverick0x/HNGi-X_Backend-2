const express = require('express');

// Create a router to handle all task2 related operations
const router = express.Router();

// Import the controller functions
const {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson,
} = require('../controller/task');

// Chain the controllers to their respective routes
router.route('/').post(createPerson);
router.route('/:user_id').get(getPerson).patch(updatePerson).delete(deletePerson);


// Export the router
module.exports = router;