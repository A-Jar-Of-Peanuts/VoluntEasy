const mongoose = require('mongoose');
const {model} = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true},
    eventsCreated: [],
    eventsSubscribed: [],
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;

