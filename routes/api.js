const router = require('express').Router();
const usersRouter = require('./users');
const questionsRouter = require('./questions');

router.get('/', (req, res) => {
    res.status(200).json('All good');
});

router.use('/users', usersRouter);
router.use('/questions', questionsRouter);

module.exports = router;