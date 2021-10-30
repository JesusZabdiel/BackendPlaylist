const mongoose = require('mongoose')

const Playlist = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
},{collection:'playlist'})

module.exports = mongoose.model('Playlist',Playlist)