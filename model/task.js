const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema  = new Schema({
    description: {type: String, required: true},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    author: {
        id: {
            type: Schema.Types.ObjectId, //embeded user id of photo author
            ref: 'user'
        },
        name: String     
    }
})

module.exports = mongoose.model('task', taskSchema);