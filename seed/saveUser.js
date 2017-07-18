const User = require('../models/users');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
function saveUsers (users) {
  return mongoose.connection.dropDatabase()
    .then(() => {
      users = users.map(dev => {
        const d = new User(dev);
        return d.save();
      });
      return Promise.all(users);
    });
}
module.exports = saveUsers;