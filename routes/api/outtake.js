const express = require('express')
const router = express.Router();

const {
    getOuttake,
    addOuttake,
    deleteOuttake
} = require("../../controllers/outtake");

router.get('/', getOuttake);
router.post('/addDog', addOuttake);
router.post('/deleteDog', deleteOuttake);
module.exports = router