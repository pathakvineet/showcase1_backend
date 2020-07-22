const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema  = new Schema({
    dom: {type: String},
    homeTeam:  {type: String, required: true},
    awayTeam: {type: String, required: true},
    winner: {type: String, required: true}
})

module.exports = mongoose.model('sport', sportSchema);