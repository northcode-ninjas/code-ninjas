process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const mongoose = require('mongoose');
mongoose.Promise = Promise;

const seedUsers = require('./users.seed');
const users = require('./data/users');

const DB_URI = require('../config')[process.env.NODE_ENV].DB;

mongoose.connect(DB_URI)
  .then(() => {
    return mongoose.connection.db.dropCollection('users');
  })
  .then(() => {
    console.log('Dropped users collection');
    return seedUsers(users);
  })
  .then(results => {
    console.log(`Saved ${results.length} users`)
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    return mongoose.connection.close();
  });