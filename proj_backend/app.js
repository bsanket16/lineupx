require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
const authRoutes = require('./routes/auth')
const jobPostingRoutes = require('./routes/jobPosting')

//DB connection
mongoose.connect( process.env.DATABASE || 'mongodb://localhost:27017/lineupx', {
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
        res.sendFile(path.resolve(__dirname, 'proj_frontend', 'build', 'index.html'))
    })
}

    // Set static folder

const port = process.env.PORT || 7000

//server
app.listen(port, () => {
    console.log(`App running at ${port}`)
})
