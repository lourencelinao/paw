const express = require('express')
const router = express.Router()

const {
    getVaccines,
    addVaccine,
    deleteVaccine
} = require("../../controllers/vaccination");

router.get('/', getVaccines);
router.post('/addVaccine', addVaccine);
router.post('/deleteVaccine', deleteVaccine);

module.exports = router