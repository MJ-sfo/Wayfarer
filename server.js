'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Comment = require('./models/comments');

//create instances
var app = express(),
    router = express.Router();

// set port to env or 3000
var port = process.env.PORT || 3001;


//config API to use bodyParser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//db mongo config
var dbUser = process.env.MLAB_DBUSER
var dbPassword = process.env.MLAB_DBPASSWORD
var databaseUrl = 'mongodb://' + dbUser + ':' + dbPassword + '@ds133331.mlab.com:33331/mywayfarer'
mongoose.connect(databaseUrl)

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//set route path and init API
router.get('/', function(req,res) {
  res.json({message: 'API Initialized!'});
});

//start server
app.listen(process.env.PORT, function() {
  console.log(`api running on port ${port}`);
});g
