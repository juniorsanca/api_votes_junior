const express = require('express')
const authController = require('../controllers/authController')

exports.router = (() => {
    const authRouter = express().Router()

    authRouter.route('/signup/').post(authController)
    authRouter.route('/signin/').post(authController)

    return authRouter
})()