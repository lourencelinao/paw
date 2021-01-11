const express = require('express')
const router = express.Router()

const {
    getClinics,
    addClinic,
    deleteClinic
} = require("../../controllers/clinic");

router.get('/', getClinics);
router.post('/', addClinic);
router.delete('/:id', deleteClinic);

module.exports = router