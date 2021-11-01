const { request, response, query } = require('express');
const express = require('express');
const mongoose = require("mongoose")

const app = express();
const plyRoutes = require('./routes/playlists')


//JSON
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/playlists' , plyRoutes)

mongoose.connect('mongodb://user7:root@54.173.202.133:27017/base7?authSource=admin')
.then(()=>{
    app.listen(8080,()=>console.log("Servidor en linea"))
})
.catch(err=>console.log(err))

app.get('*', (req, res)=>{
    res.sendStatus(404)
  });

app.post('*', (req, res)=>{
    res.sendStatus(404)
});

app.put('*', (req, res) =>{
    res.sendStatus(405)
})

app.delete('*' , (req, res)=>{
    res.sendStatus(405)
})