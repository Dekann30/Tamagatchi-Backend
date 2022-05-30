const Creature = require('../models/Creature')
const creatures = require('../models/creatures.json')


const actions = {}

actions.index = async (req,res)=>{
    try{
        res.json(creatures)
    } catch (err){
        res.send(err)
    }
}


module.exports = actions