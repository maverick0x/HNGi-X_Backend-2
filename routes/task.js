const express = require('express');

const router = express.Router();
const {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson,
} = require('../controller/task');

router.route('/').post(createPerson);
router.route('/:user_id').get(getPerson).patch(updatePerson).delete(deletePerson);

module.exports = router;