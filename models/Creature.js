const mongoose = require('./connection')

const creatureSchema = new mongoose.Schema({
    name: {type: String, required: true},
    icon: {type: String, required: true},
    isFed: {type: Boolean, default: false},
    isWatered: {type: Boolean, default: false},
    isPetted: {type: Boolean, default: false}
}, {timestamps: true})

const Creature = mongoose.model('Creature', creatureSchema)

module.exports = Creature