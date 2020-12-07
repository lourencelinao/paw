const express = require('express')
const router = express.Router()

const {
    getAdopted_outtake,
    addAdopted_outtake,
    deleteAdopted_outtake
} = require("../../controllers/addopted_outtake");

router.get('/', getAdopted_outtake);
router.post('/addDog', addAdopted_outtake);
router.post('/deleteDog', deleteAdopted_outtake);

module.exports = router