const JobPosting = require('../models/jobPosting')
const { validationResult } = require('express-validator')
// const formidable = require('formidable')

exports.createJobPosting = (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error : `${errors.array()[0].msg}`
        })
    }

    const job = new JobPosting(req.body)
    job.save((err, jobPosting) => {
        if(err){
            return res.status(400).json({
                err: 'Not able to save this Job-Posting'
            })
        }
        res.json({jobPosting})
    })
}

exports.getJobPostings = (req, res) => {
    JobPosting.find().exec((err, jobs) => {
        if (err){
            return res.status(400).json({
                error : 'No categories found'
            })
        }
        res.json({jobs})
    })  
}