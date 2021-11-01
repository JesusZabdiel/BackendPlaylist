const Playlist = require("../models/playlists")
const mongoose = require('mongoose')

exports.getPlaylist = async (req,res)=>{
    try{        
        const pl = await Playlist.find()
        console.log(pl)
        res.json(pl)
        res.status(200)
    }catch(err){
        res.status(503).send({operacion: "Server down"})
    }

}

exports.postAgregarPlaylist = async (req,res)=>{
    const playlist = new Playlist(req.body)
    playlist._id = new mongoose.Types.ObjectId
    const  title =  req.body.titulo
    const desc =  req.body.descripcion

    condTitle = title.length >= 5 && title.length <=50
    condDesc = desc.length >= 10 && desc.length <= 250

    if(condTitle && condDesc){
        try{
            await playlist.save()
            console.log(playlist)
            console.log("Playlist registrado")
            res.status(200).send({operacion: "Realizada correctamente"})
            
        }catch(err){
            console.log(err)
            res.status(400).send({operacion: "Error"})         
        }
    }else{
        res.status(422).send("La descripcion debe tener de 10 a 250 chars\nEl titulo debe tener de 5 a 50 chars")
    }


}

exports.postActualizarPlaylist = async (req,res)=>{
    const playlist = new Playlist(req.body)

    try{
        const  title =  req.body.cambio.titulo
        const desc =  req.body.cambio.descripcion
        condTitle = title.length >= 5 && title.length <=50
        condDesc = desc.length >= 10 && desc.length <= 250
  

        if(condTitle && condDesc){
            try{
                await Playlist.findOneAndUpdate(req.body.filtro,req.body.cambio)
                console.log("Cambio registrado")
                res.status(200).send({operacion: "Realizada correctamente"})
                
        
            }catch(err){
                console.log(err)
                res.status(400).send({operacion: "Error"})
                
            }
        }else{
            res.status(422).send("La descripcion debe tener de 10 a 250 chars\nEl titulo debe tener de 5 a 50 chars")
        }

    }catch{
        res.status(422).send("Hay un error en los datos.\nDebes de mandar un Json con un Json Filtro y \nUn Json con el cambio")
    }

    
}

exports.postBorrarPlaylist = async (req,res)=>{
    try{
        await Playlist.findByIdAndRemove(req.body)
        console.log("Playlist eliminada")
        res.status(200).send({operacion: "Realizada correctamente"})
        

    }catch (err){
        console.log(err)
        res.status(400).send({operacion: "Error"})
      
    }

}