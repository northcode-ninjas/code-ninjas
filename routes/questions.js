const router = require('express').Router();
const {Questions} = require('../models/models');

router.get('/:level', (req, res, next) => {
    const level = req.params;
    // console.log(req.params)
    Questions.find(level)
    .then((levels) => {
        levels.map((level) => {
            return level.questionNumber;
        });
        return res.status(200).json({levels});
    })
    .catch(next);
});


 router.get('/:level/:question', (req, res, next) => {
    const {level, question} = req.params;
    Questions.find({level: level, questionNumber:question})
    .then((questionNumber) => {
        if (questionNumber.length < 1) {
            return next({ status: 404, message: 'I do not have a question here'});
        }
        else return res.status(200).json({questionNumber});
    })
    .catch((err) => {
        console.log(err);
        if (err.name === 'CastError') {
            return next({ status: 422, message: 'You have not started on the path to enlightenment, please sign up to begin' });
        }
    });
}); 

module.exports = router;