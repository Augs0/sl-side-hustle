const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    workplace: String,
    interests: [String]
}, {versionKey: false});

const User = mongoose.model('User', userSchema);

module.exports = User;