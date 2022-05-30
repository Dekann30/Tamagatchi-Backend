const express = require('express')
const router = express.Router()
const CreatureActions = require('./CreatureActions')

router.get('/', CreatureActions.index)



module.exports = router