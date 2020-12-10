const express = require('express')
const router = express.Router()

const {
    getVaccines,
    getVaccine,
    addVaccine,
    deleteVaccine,
    patchVaccine
} = require("../../controllers/vaccination");

router.get('/:id', getVaccines);
router.get('/:id/getVaccine', getVaccine);
router.patch('/:id', patchVaccine);
router.post('/', addVaccine);
router.post('/', deleteVaccine);

module.exports = router