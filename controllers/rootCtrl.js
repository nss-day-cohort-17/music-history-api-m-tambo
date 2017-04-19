'use strict'

module.exports.showRoot = function(req, res, next) {
  res.json({
    "title": "The Music History API",
    "songs": "http://localhost:3000/api/v1/songs",
    "song with id 15": "http://localhost:3000/api/v1/songs/15",
    "albums": "http://localhost:3000/api/v1/albums"
  })
}
