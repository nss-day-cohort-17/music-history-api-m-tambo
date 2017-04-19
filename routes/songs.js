'use strict';

// <require the express Router>
// <require the songCtrl to get access to its methods>
const Router = require('express')
const router = Router()

const { getAllSongs, getSingleSong, addSong, deleteSong } = require('../controllers/songCtrl')

// <define routes for getting all songs and a single song>
router.get('/songs', getAllSongs)
router.get('/songs/:id', getSingleSong)
// <define routes for posting, deleting, editing a song>
router.post('/songs/new', addSong)
router.delete('/songs/delete/:id', deleteSong)

module.exports = router
