const User = require('../models/user')
const Admin = require('../models/admin')


exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                error : 'No User Found'
            })
        }
        req.profile = user
        next()
    })
}

exports.getAdminById = (req, res, next, id) => {
    Admin.findById(id).exec((err, admin) => {
        if(err || !admin){
            return res.status(400).json({
                error : 'No User Found'
            })
        }
        req.profile = admin
        next()
    })
}