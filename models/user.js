const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    email: {type: String, unique: true, lowercase: true},
    profile: {
        name: {type: String, default: ''},
        picture: {type: String, default: ''}
    },

    coursesTeach: [{
        course: {type: Schema.Types.ObjectId, ref: "Course"}
    }],

    coursesTaken: [{
        course: {type: Schema.Types.ObjectId, ref: "Course"}
    }]
});

module.exports = mongoose.model('User', userSchema);