//Dependencies
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const CreatureRouter = require('./controllers/CreatureController')

const app = express()

//Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use('/', CreatureRouter)


app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})