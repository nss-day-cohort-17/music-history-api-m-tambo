'use strict';

// <require the express Router>
// <require the songCtrl to get access to its methods>
const Router = require('express')
const router = Router()

const { getAllSongs, getSingleSong } = require('../controllers/songCtrl')

router.get('/songs', getAllSongs)
router.get('/songs/:id', getSingleSong)

module.exports = router

// <define routes for getting all songs and a single song>
// <stretch: define routes for posting, deleting, editing a song>
