'use strict'

const express = require('express');
const bodyParser = require('body-parser');
let app = express();

// <Include the router index file>
const routes = require('./routes/')

// <Setup your routes middleware>
app.use('/api/v1/', routes)

// <catch any undefined routes with a 404 middleware>
app.use((err, req, res, next) => {
  console.log(`first middleware:`)
  next(err)
})

// <Handle any errors that occur in the routing with error handlers defined at the bottom of our
// middleware stack>
app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} in this super keen env: ${process.env.NODE_ENV}`);
});
