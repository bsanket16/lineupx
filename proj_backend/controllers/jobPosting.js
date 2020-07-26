const JobPosting = require('../models/jobPosting')
const { validationResult } = require('express-validator')
// const formidable = require('formidable')

exports.getJobPostingById = (req, res, next, id) => {
    JobPosting.findById(id)
    .exec((err, job) => {
        if(err){
            return res.status(400).json({
                error : 'Job posting not found'
            })
        }
        req.posting = job
        next()
    })
}


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
        res.json(jobs)
    })  
}


// exports.acceptJobPosting = (req, res) => {
//     const jobPosting = req.posting
//     jobPosting.status = true

//     jobPosting.save((err, updateJobPosting) => {
//         if (err){
//             return res.status(400).json({
//                 error : 'Failed to updateJobPosting'
//             })
//         }
//         res.json(updateJobPosting)
//     })
// }

// exports.rejectJobPosting = (req, res) => {
//     const jobPosting = req.posting
//     jobPosting.status = false

//     jobPosting.save((err, updateJobPosting) => {
//         if (err){
//             return res.status(400).json({
//                 error : 'Failed to updateJobPosting'
//             })
//         }
//         res.json(updateJobPosting)
//     })
// }

// exports.getAcceptedJobOffers = (req, res) => {
//     JobPosting.find({status : true}).exec((err, jobs) => {
//         if (err){
//             return res.status(400).json({
//                 error : 'No Jobs Found'
//             })
//         }
//         res.json({jobs})
//     })  
// }

// exports.getRejectedJobOffers = (req, res) => {
//     JobPosting.find({status : false}).exec((err, jobs) => {
//         if (err){
//             return res.status(400).json({
//                 error : 'No Jobs Found'
//             })
//         }
//         res.json({jobs})
//     })  
// }