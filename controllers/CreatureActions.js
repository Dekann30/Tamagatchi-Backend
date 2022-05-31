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

actions.update = (req,res)=>{
    Creature.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCreature)=>{
        res.json(updatedCreature)
    })
}

actions.delete = (req,res)=>{
    Creature.findByIdAndDelete(req.params.id, (err, deletedCreature)=>{
        res.json(creatures)
    })
}


actions.create = async (req, res)=>{
    Creature.create(req.body, (err, createdCreature)=>{
        res.json(createdCreature)
    })
}


actions.show = (req,res)=>{
    Creature.findById(req.params.id, (err, foundCreature)=>{
        res.json(foundCreature)
    })
}

module.exports = actions