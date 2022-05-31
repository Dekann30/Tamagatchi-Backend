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

actions.index = (req,res)=>{
    Creature.find({}, (err, allCreatures)=>{
        res.json(allCreatures)
    })
}

actions.delete = async (req,res)=>{
    try{
        await Creature.findByIdAndDelete(req.params.id)
        res.json(creatures)
    } catch(err){
        res.send(err)
    }
}



actions.create = async (req, res)=>{
    Creature.create(req.body, (err, createdCreature)=>{
        res.json(createdCreature)
    })
}



module.exports = actions