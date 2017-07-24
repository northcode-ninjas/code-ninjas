const router = require('express').Router();
const {Questions} = require('../models/models');

router.get('/:level/questions', (req, res, next) => {
    const {level} = req.params;
    Questions.find({level})
    .then((questions) => {
        return res.status(200).json({questions});
    })
    .catch(next);
});

module.exports = router;