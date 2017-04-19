'use strict'

// <require express Router and require the songs.js router file>
const Router = require('express')
const router = Router()

router.use(require('./songs.js'))
router.use(require('./root.js'))
// this is an example of a root document. It returns a json representation of
// all of our endpoints. (Just one endpoint exists in this tiny example app)



module.exports = router
