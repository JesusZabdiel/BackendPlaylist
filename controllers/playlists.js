const Playlist = require("../models/playlists")

exports.getPlaylist = (req,res)=>{
    const pl = await Playlist.find()
    console.log(pl)
    res.json(pl)
}

exports.postAgregarPlaylist = (req,res)=>{
    const playlist = new Playlist(req.body)
    try{
        await playlist.save()
        console.log(playlist)
        console.log("Playlist registrado")
        res.send({operacion: "Realizada correctamente"})
    }catch(err){
        console.log(err)
        res.send({operacion: "Realizada incorrectamente"})
    }
}

exports.postActualizarPlaylist = (req,res)=>{
    try{
        //No se si este bien
        Playlist.findOneAndUpdate(req.body.filtro,req.body.cambio)
        console.log("Cambio registrado")
        res.send({operacion: "Realizada correctamente"})
    }catch(err){
        console.log(err)
        res.send({operacion: "Realizada incorrectamente"})
    }
}

exports.postBorrarPlaylist = (req,res)=>{
    await Playlist.findByIdAndRemove(req.body)
    console.log("Playlist eliminada")
    res.send({operacion: "Realizada correctamente"})
}