const express = require('express')
const router = express.Router()
const { authRole } = require('../../middleware/auth')

// import controller

router.get('/', authRole(['Admin', 'Manager', 'Staff', 'Volunteer']), (req, res) => {
    res.status(200).send()
})

router.post('/', authRole(['Admin', 'Manager', 'Staff', 'Volunteer']), (req, res) => {
    res.status(201).send()
})

router.put('/:id', authRole(['Admin', 'Manager', 'Staff', 'Volunteer']), (req, res) => {
    res.status(200).send()
})

router.delete('/:id', authRole(['Admin', 'Manager']), (req, res) => {
    res.status(200).send()
})
module.exports = router