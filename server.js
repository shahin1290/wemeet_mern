const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

// Define Routes
app.use('/api/users', require('./config//routes/api/users'))
app.use('/api/auth', require('./config/routes/api/auth'))
app.use('/api/profile', require('./config/routes/api/profile'))
app.use('/api/groups', require('./config/routes/api/groups'))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`Server started on port ${PORT}`)})