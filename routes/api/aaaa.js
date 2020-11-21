// const express = require('express')
// const router = express.Router()

// const { authRole } = require('../../middleware/auth')

// authRole will implement authorization of users, meaning the routes will only be accessible
// if the user have enough clearance to access said routes, role can be found in users table, column user_type
// ROLES to access the route, 
// GET = Admin, Manager, Staff, Volunteer
// POST = Admin, Manager, Staff
// PUT = Admin, Manager, Staff
//DELETE = Admin, Manager

// const { foo } = require('controllerPathHere')
// controller example is located at controller/aaaa

// router.get('/', authRole(['Admin', 'Manager', 'Staff', 'Volunteer']), foo) in the browser this will look as localhost:3000/aaaa

// router.get('/:id', authRole(['Admin', 'Manager', 'Staff', 'Volunteer']), foo) in the browser this will look as localhost:3000/aaaa/:id

// router.post('/', authRole(['Admin', 'Manager', 'Staff'), foo) in the  browser this will look as localhost:3000/aaaa

// router.put('/:id', authRole(['Admin', 'Manager'), foo)  in browser this will look as localhost:3000/aaaa/:id

// router.delete('/:id', foo)  in browser this will look as localhost:3000/aaaa/:id

// module.exports = router