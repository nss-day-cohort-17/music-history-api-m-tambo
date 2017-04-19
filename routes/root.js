'use strict'

const Router = require('express')
const router = Router()

const { showRoot } = require('../controllers/rootCtrl.js')

router.get('/', showRoot)

module.exports = router
