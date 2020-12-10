const express = require('express')
const router = express.Router()

const {
    getClinics,
    addClinic,
    deleteClinic
} = require("../../controllers/clinic");

router.get('/', getClinics);
router.post('/', addClinic);
router.delete('/', deleteClinic);

module.exports = router