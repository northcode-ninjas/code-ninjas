const router = require('express').Router();
const models = require('../models/models');

router.get('/', (req, res) => {
    res.status(200).json('All good');
});

router.get('/users/:username', (req, res, next) => {
    const {username} = req.params;
    return models.Users.find({username})
    .then((welcomeUser) => {
        if (welcomeUser.length < 1) {
            return next({ status: 404, message: 'I do not recognise you young Ninja, reveal yourself to me again'})
        }
        else return res.status(200).json({welcomeUser})
    })
    .catch((err) => {
        console.log(err)
        if (err.name === 'CastError') {
            return next({ status: 422, message: 'You have not started on the path to enlightenment, please sign up to begin' })
        }
    })
});

module.exports = router;