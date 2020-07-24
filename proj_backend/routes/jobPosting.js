const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const { createJobPosting, getJobPostings } = require('../controllers/jobPosting')
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth')
const { getUserById, getAdminById } = require('../controllers/user')

//params
router.param('userId', getUserById)
router.param('adminId', getAdminById)

//routes


//create
router.post('/job-postings/create/:adminId',[
    //check
    check('title').not().isEmpty().withMessage('Job title required').isLength({ min : 3 }).withMessage('Job title too short').isLength({ max : 15 }).withMessage('Job title too long'),
    check('companyName').not().isEmpty().withMessage('Company name required').isLength({ min : 3 }).withMessage('Company name too short').isLength({ max : 15 }).withMessage('Company name too long'),
    check('location').isLength({ min : 3}).withMessage('Location not found'),
    check('openings').not().isEmpty().withMessage('Number of openings required'),
    check('salary').not().isEmpty().withMessage('Salary cannot be empty')

], isSignedIn, isAuthenticated, isAdmin, createJobPosting)


//listings
router.get('/jobs/admin/:adminId', isSignedIn, isAuthenticated, isAdmin, getJobPostings)
router.get('/jobs/user/:userId', isSignedIn, isAuthenticated, getJobPostings)


module.exports = router
