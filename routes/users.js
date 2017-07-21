const router = require('express').Router();
const {Users} = require('../models/models');


router.get('/', (req, res, next) => {
    Users.find()
        .then((users) => {
            if (users.length < 1) return res.status(202).json({ message: 'No users found' });
            return res.status(200).json({ users });
        })
        .catch(next);
});

router.get('/:username', (req, res, next) => {
    const { username } = req.params;
    return Users.findOne({ username })
        .then((user) => {
            if (user.length < 1) {
                return next({ status: 404, message: 'I do not recognise you young Ninja, reveal yourself to me again' });
            }
            else return res.status(200).json({ user });
        })
        .catch((err) => {
            console.log(err);
            if (err.name === 'CastError') {
                return next({ status: 422, message: 'You have not started on the path to enlightenment, please sign up to begin' });
            }
        });
});

router.put('/:username/level-up', (req, res, next) => {
    let { username } = req.params;

    Users.findOneAndUpdate({username}, { $inc: { level: 1 } }, { new: true })
        .then((user) => {
            return res.status(202).json({user});
        })
        .catch(next);
});


module.exports = router;