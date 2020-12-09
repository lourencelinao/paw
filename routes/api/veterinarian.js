const express = require('express')
const router = express.Router()
const { authRole } = require('../../middleware/auth');

const {
    getVet,
    addVet,
    updateVet,
    deleteVet
} = require("../../controllers/veterinarian");


router.get('/', getVet);
router.post('/addVet', addVet);
router.put('/:id', updateVet);
router.delete('/:id', deleteVet);

module.exports = router