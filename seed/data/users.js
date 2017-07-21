const faker = require('faker');
const {range} = require('underscore');

const users = range(3).map((num) => {
    return {
        username: `loneninja${num}`,
        email: `loneninja${num}@gmail.com`,
        avatar_url: faker.internet.avatar(),
        level: 0
    };
});

module.exports = users;