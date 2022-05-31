const express = require('express')
const router = express.Router()
const CreatureActions = require('./CreatureActions')


router.get('/seed', CreatureActions.seed)
router.get('/', CreatureActions.index)
router.delete('/:id', CreatureActions.delete)
router.put('/:id', CreatureActions.update)
router.post('/', CreatureActions.create)
router.get('/:id', CreatureActions.show)



module.exports = router