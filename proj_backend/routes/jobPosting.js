const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const { createJobPosting, getJobPostings, getJobPostingById, acceptJobPosting, rejectJobPosting, getAcceptedJobOffers, getRejectedJobOffers} = require('../controllers/jobPosting')
const { isSignedIn, isAuthenticatedA, isAuthenticatedU, isAdmin } = require('../controllers/auth')
const { getUserById, getAdminById } = require('../controllers/user')

//params
router.param('userId', getUserById)
router.param('adminId', getAdminById)
router.param('jobId', getJobPostingById)

//routes


//create
router.post('/job-postings/create',[
    //check
    check('title').not().isEmpty().withMessage('Job title required').isLength({ min : 3 }).withMessage('Job title too short').isLength({ max : 30 }).withMessage('Job title too long'),
    // check('companyName').not().isEmpty().withMessage('Company name required').isLength({ min : 3 }).withMessage('Company name too short').isLength({ max : 15 }).withMessage('Company name too long'),
    check('location').isLength({ min : 3}).withMessage('Location not found'),
    check('openings').not().isEmpty().withMessage('Number of openings required'),
    check('salary').not().isEmpty().withMessage('Salary cannot be empty')

], createJobPosting)


// Accept/Reject JobOffers
// router.put('/jobs/:jobId/:userId/accept', isSignedIn, isAuthenticated, acceptJobPosting)
// router.put('/jobs/:jobId/:userId/reject', isSignedIn, isAuthenticated, rejectJobPosting)

// // Get Accepted/Rejected JobOffers
// router.get('/jobs/:userId/accepted', isSignedIn, isAuthenticated, getAcceptedJobOffers)
// router.get('/jobs/:userId/rejected', isSignedIn, isAuthenticated, getRejectedJobOffers)

//listings
router.get('/jobs/admin/:adminId', isSignedIn, isAuthenticatedA, getJobPostings)
router.get('/jobs/user/:userId', isSignedIn, isAuthenticatedU, getJobPostings)



module.exports = router
