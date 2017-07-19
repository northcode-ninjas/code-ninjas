const faker = require('faker');
const {range} = require('underscore');

const users = range(3).map((num) => {
    return {
        username: `loneNinja${num}`,
        email: `loneNinja${num}@gmail.com`,
        avatar_url: faker.internet.avatar(),
        level: 'academy', 
        questionNumber: 1
    };
});

module.exports = users;