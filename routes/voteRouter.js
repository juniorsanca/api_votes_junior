const express = require ('express')
const voteController = require ('../controllers/voteController')

exports.router= (() => {
    const voteRouter = express.Router()

    voteRouter.route('/vote/').get('voteController')

    return voteRouter
})()