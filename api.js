console.log('nodemon work yes')

const express = require ('express')
const helmet = require ('helmet')

const authRouter = require('./routes/authRouter').router

const api = express()
api.use(helmet())
api.use(express.json)

api.use('/auth/', authRouter)

api.listen(3000, () =>
console.log('serveur sur le port 3000, gooo junior !')
)
// http://localhost:3000/api/v1/
// http://localhost:3000/api/v1/
// http://localhost:3000/api/v1/
// http://localhost:3000/api/v1/

