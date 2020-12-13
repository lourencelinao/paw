const express = require('express')
const router = express.Router()
const { authRole } = require('../../middleware/auth');

const {
    getPerson,
    addPerson,
    updatePerson,
    deletePerson,
    updatePersonEmail
} = require("../../controllers/person");
router.get('/:id', getPerson);
router.patch('/:id/updatePersonEmail', updatePersonEmail)
router.post('/addPerson', addPerson);
router.patch('/:id', updatePerson);
router.delete('/:id', deletePerson);


module.exports = router;