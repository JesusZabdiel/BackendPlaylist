const plyController = require('../controllers/playlists')
const router = require('express').Router()

router.get('/playlists' , plyController.getPlaylists)





module.exports = router