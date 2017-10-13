const {range} = require('underscore');

const users = range(3).map((num) => {
    return {
        username: `loneninja${num}`,
        email: `loneninja${num}@gmail.com`,
        avatar_url: 'http://img10.deviantart.net/b7ea/i/2015/104/d/f/lucy_ninja_by_waynemountan-d8isffj.png',
        level: 0
    };
});

module.exports = users;