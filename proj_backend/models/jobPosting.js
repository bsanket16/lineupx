const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    companyName: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    location: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    openings: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required:true
    }
},

    { timestamps: true }
)

module.exports = mongoose.model('JobPosting', jobSchema)