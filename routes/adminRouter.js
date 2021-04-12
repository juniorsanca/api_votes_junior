const express = require('express')
const adminController = require('../controllers/adminController')

exports.router = (() => {
    const adminRouter = express().Router()

    adminController.route('/signup/').post(adminController)
    adminController.route('/signin/').post(adminController)

    return adminController
})()