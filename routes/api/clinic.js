const express = require('express')
const router = express.Router()

const {
    getClinics,
    addClinic,
    deleteClinic
} = require("../../controllers/clinic");

router.get('/', getClinics);
router.post('/addClinic', addClinic);
router.post('/deleteClinic', deleteClinic);

module.exports = router