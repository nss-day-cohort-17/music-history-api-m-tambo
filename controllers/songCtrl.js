'use strict'

// <require a song model>
const { bookshelf } = require('../db/database.js')
const Song = require('../models/song.js')

// < use model methods for getting all songs and one song then send the response back with the data>
const getAllSongs = (req, res, next) => {
  Song.getAllSongs()
    .then((songs) => res.status(200).json(songs))
}

const getSingleSong = (req, res, next) => {
  Song.getSingleSong(req.params.id)
    .then((song) => res.status(200).json(song))
}

module.exports = {
  getAllSongs,
  getSingleSong
}


// <stretch goal: methods for adding, deleting, editing a song>
