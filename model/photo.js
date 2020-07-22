const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema  = new Schema({
    url: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    author: {
        id: {
            type: Schema.Types.ObjectId, //embeded user id of photo author
            ref: 'user'
        },
        name: String     
    }
})

module.exports = mongoose.model('photo', photoSchema);