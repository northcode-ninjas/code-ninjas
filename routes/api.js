const router = require('express').Router();
const usersRouter = require('./users');
const questionsRouter = require('./questions');
const updateUser = require('./users');

router.get('/', (req, res) => {
    res.status(200).json('All good');
});

router.use('/users', usersRouter);
router.put('/users', updateUser);

router.use('/levels', questionsRouter);

module.exports = router;