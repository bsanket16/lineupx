require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

// routes
const authRoutes = require('./routes/auth')
const jobPostingRoutes = require('./routes/jobPosting')

const app = express()

app.use(cors())
app.use(bodyParser.json())

//DB connection
mongoose.connect( process.env.MONGODB_URI || process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log('Database Connected')
})

app.use('/api', authRoutes)
app.use('/api', jobPostingRoutes)


// Serve static assets
if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static('../proj_frontend/build'))
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, + '../proj_frontend/build/index.html'))
    })
}

module.exports = app