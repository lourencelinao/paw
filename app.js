require('dotenv').config() // dotenv
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const { protect } = require('./middleware/auth')

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// routes

app.use('/api/user', require('./routes/api/user'))

/**
 * All routes below are protected 
 * 
 */
app.use('/api', protect)
app.use('/api/action', protect, require('./routes/api/action'))
app.use('/api/adopted_outtake', require('./routes/api/adopted_outtake'))
app.use('/api/clinic', require('./routes/api/clinic'))
app.use('/api/dog_image', require('./routes/api/dog_image'))
app.use('/api/dog', require('./routes/api/dog')) 
app.use('/api/intake', require('./routes/api/intake')) // might not be used
app.use('/api/medical_record', require('./routes/api/medical_record'))
app.use('/api/outtake', require('./routes/api/outtake')) // might not be used
app.use('/api/person', require('./routes/api/person'))
app.use('/api/rescued_intake', require('./routes/api/rescued_intake'))
app.use('/api/surrendered_intake', require('./routes/api/surrendered_intake'))
app.use('/api/transferee_intake', require('./routes/api/transferee_intake'))
app.use('/api/transferred_outtake', require('./routes/api/transferred_outtake'))
app.use('/api/vaccination', require('./routes/api/vaccination'))
app.use('/api/veterinarian', require('./routes/api/veterinarian'))


const port = 3000
app.listen(port, console.log(`Server listening at port ${port}`))