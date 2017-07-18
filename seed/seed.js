const data = require('./data/user_data');
const saveUser = require('./saveUser');
const mongoose = require('mongoose');
const DB = 'mongodb://localhost/api/:username';

mongoose.connect(DB);

saveUser(data)
  .then(() => {
    console.log('Users seeded successfully in ' + DB);
  })
  .catch(err => {
    console.log('Error seeding database', err);
  })
  .then(() => {
    mongoose.connection.close();
  });
  