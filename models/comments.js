'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  name: String,
  text: String,
  date: String, // go back to Date later - need to store as time/date so can calculate how old a post is
  uid: String,
  title: String   
});

// this exports a value, not objectx
module.exports = mongoose.model('Comment', CommentsSchema);
