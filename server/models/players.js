var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: String,
    preference: String,
    games: Object  
}, {timestamps: true})

var Player = mongoose.model('Player', PlayerSchema);