'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    // Comment = require('./models/comments');
var db = require('./models');
//create instances
var app = express(),
    router = express.Router();

// set port to env or 3000
var port = process.env.API_PORT || 3001;

//db config
//ADD YOUR INFO HERE!
var dbUser = process.env.MLAB_DBUSER
var dbPassword = process.env.MLAB_DBPASSWORD
var databaseUrl = 'mongodb://' + dbUser + ':' + dbPassword + '@ds133331.mlab.com:33331/mywayfarer'
// mongoose.connect(databaseUrl)

//config API to use bodyParser and look for JSON in req.body
// app.use(bodyParser.urlencoded({extended: true }));
// app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});  //  app.use(function

//set route path and init API
router.get('/', function(req,res) {
  res.json({message: 'API Initialized for Wayfarer !!!'});
});

// delete all comments
router.route('/nuke').get(function(req,res){
  db.Comment.remove(function(err,succ){
  res.json(succ);
  });
});

//adding the /comments route to our /api router
router.route('/comments')
  //retrieve all comments from the database
  .get(function(req, res) {
    // looks at our Comment Schema
    db.Comment.find(function(err, comments) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(comments);
      console.log('router for commeents ', comments)
    });
    console.log('running comments router');
  })

  .post(function(req, res) {
    var post = new db.Comment();
    //body parser lets us use the req.body
    post.name = req.body.name;
    post.text = req.body.text;

    post.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'travel tip successfully added!' });
    });
  });

//use router config when we call /API
app.use('/api', router);

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
