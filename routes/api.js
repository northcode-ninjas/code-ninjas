const router = require('express').Router()

router.get('/', function (req, res) {
    res.send('OK');
})

router.use('/user', userRouter);
router.use('/level', levelRouter);
router.use('/rank', rankRouter);

module.exports = router;