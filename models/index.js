var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/Wayfarer");
var Comments = require('./comments');

// exporting a key-value object, with key 'Comments'
module.exports.Comments = require('./comments');
