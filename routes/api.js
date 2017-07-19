const router = require('express').Router();
const usersRouter = require('./users');

router.get('/', (req, res) => {
    res.status(200).json('All good');
});

router.use('/users', usersRouter);

module.exports = router;