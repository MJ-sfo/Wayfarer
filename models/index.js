var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/Wayfarer");
var Comments = require('./comments');

module.exports.Comments = require('./comments');
