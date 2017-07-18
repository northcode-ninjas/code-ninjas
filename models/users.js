var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true
  },
  avatar_url: {
    type: String,
    required: true,
    lowercase: true
  },
  progress: {
      type: Number,
      required: true
  }
});

module.exports = mongoose.model('users', UserSchema);