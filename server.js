//Dependencies
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//Middleware
app.use(morgan('tiny'))
app.use(cors())