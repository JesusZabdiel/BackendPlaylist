const plyController = require('../controllers/playlists')
const router = require('express').Router()

router.get('/Playlists' , plyController.getPlaylist)
router.post('/agregarPlaylists',plyController.postAgregarPlaylist)
router.post('/actualizarPlaylists',plyController.postActualizarPlaylist)
router.post('/borrarPlaylists',plyController.postBorrarPlaylist)


module.exports = router