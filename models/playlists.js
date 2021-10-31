const mongoose = require('mongoose')

const Playlist = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
},{collection:'Playlist'})

module.exports = mongoose.model('Playlist',Playlist)