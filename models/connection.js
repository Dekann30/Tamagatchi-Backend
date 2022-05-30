//Dependencies
require('dotenv').config()
const mongoose = require('mongoose')

//Database Connection
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(DATABASE_URL)
const cxn = mongoose.connection

cxn
.on('open', () => console.log('Mongo is connected'))
.on('close', () => console.log('Mongo is disconnected'))
.on('error', (err) => console.log(err))

module.exports = mongoose