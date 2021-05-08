console.log('hello Junior you are the best !')
const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const authRouter = require('./routers/authRouter').router
const adminRouter = require('./routers/adminRouter').router

const api = express()
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))
api.use(helmet())
mongoose.set('useFindAndModify', false)
mongoose.connect(
    'mongodb+srv://testUser:12345@cluster0.kkf3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'ERROR: CANNOT CONNECT TO MONGO-DB'))
db.once('open', () => console.log('CONNECTED TO MONGO-DB'))
api.use('/auth/', authRouter)
api.use(express.json())

api.use('/admin/', adminRouter)
api.use('/auth/', authRouter)

api.listen(3000, () => console.log('server lancé sur le port 3000'))

//mongodb+srv://testUser:<password>@cluster0.kkf3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority