require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

// routes
const authRoutes = require('./routes/auth')
const jobPostingRoutes = require('./routes/jobPosting')

app.use('/api', authRoutes)
app.use('/api', jobPostingRoutes)

//DB connection
mongoose.connect( process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log('Database Connected')
})

const port = process.env.PORT

//server
app.listen(port, () => {
    console.log(`App running at ${port}`)
})
