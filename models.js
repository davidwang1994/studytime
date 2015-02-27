
var Mongoose = require('mongoose');


var UserSchema = new Mongoose.Schema({
  // fields are defined here
  "username" : String,
  "password" : String,
  "email" : String,
  "major" : String
});

exports.Users = Mongoose.model('User', UserSchema);


