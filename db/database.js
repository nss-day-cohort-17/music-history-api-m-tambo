'use strict'

// <Setup the configuration module for knex and bookshelf>
// No need to make migrations, since the db and tables already exist
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

// avoid circular dependencies
bookshelf.plugin('registry')

module.exports = {knex, bookshelf}
