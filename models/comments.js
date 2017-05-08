'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema ({
  name: String,
  text: String,
  date: String
});

module.exports = mongoose.mode('Comments', CommentsSchema);
