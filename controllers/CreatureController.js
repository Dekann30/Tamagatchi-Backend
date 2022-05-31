const express = require('express')
const router = express.Router()
const CreatureActions = require('./CreatureActions')


router.get('/seed', CreatureActions.seed)
router.get('/', CreatureActions.index)
router.post('/', CreatureActions.create)
router.get('/:id', CreatureActions.show)



module.exports = router