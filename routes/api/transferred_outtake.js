const express = require('express')
const router = express.Router()

const {
    getTransferred_outtake,
    addTransferred_outtake,
    deleteTransferred_outtake
} = require("../../controllers/transferred_outtake");

router.get('/', getTransferred_outtake);
router.post('/addDog', addTransferred_outtake);
router.post('/deleteDog', deleteTransferred_outtake);

module.exports = router