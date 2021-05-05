const express = require('express')
const adminController = require('../controllers/adminController')

exports.router = (() => {
    const adminRouter = express().Router()

    adminRouter.route('/users/').get(adminController)
    adminRouter.route('/users/:id').get(adminController)

    return adminRouter
})()