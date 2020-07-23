const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// platform users schema

const userSchema = new Schema({
    username: { type: String, required: true }, //user name/full name
    profilePic: { type: String, required: true },
    email: { type: String, required: true, unique: true },    //user email
    password: { type: String, required: true }, //user password

    postedTasks: [      //list of user posted blogs
        {
            type: Schema.Types.ObjectId, //embeded blog id
            ref: "task"
        }
    ],
    uploadedPhotos: [   //list of user uploaded photos
        {
            type: Schema.Types.ObjectId, //embeded photo id
            ref: "photo"
        }
    ],
    createdAt: { type: Date, default: Date.now }   //account creation date
});



module.exports = mongoose.model('user', userSchema);