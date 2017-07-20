const router = require('express').Router();
const usersRouter = require('./users');
const questionsRouter = require('./questions');
const updateUser = require('./users');

router.get('/', (req, res) => {
    res.status(200).json('All good');
});

router.use('/users', usersRouter);
router.post('/users', updateUser)

router.use('/questions', questionsRouter);

module.exports = router;