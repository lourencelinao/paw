const express = require('express')
const router = express.Router()
const { authRole } = require('../../middleware/auth');

const {
    getPerson,
    addPerson,
    updatePerson,
    deletePerson
} = require("../../controllers/person");
router.get('/', getPerson);
router.post('/addPerson', addPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);


module.exports = router;