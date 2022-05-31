const Creature = require('../models/Creature')
const creatures = require('../models/creatures.json')


const actions = {}

actions.seed = async (req,res)=>{
    try{
        await Creature.deleteMany({})
        await Creature.create(creatures)
        res.redirect('/creatures')
    } catch(err){
        res.send(err)
    }
}

actions.index = async (req,res)=>{
    try{
        res.json(creatures)
    } catch (err){
        res.send(err)
    }
}


module.exports = actions