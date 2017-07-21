const router = require('express').Router();
const models = require('../models/models');


 router.get('/:question', (req, res, next) => {
    const {question} = req.params;
    return models.Questions.find({level: question})
    .then((generateQuestion) => {
        if (generateQuestion.length < 1) {
            return next({ status: 404, message: 'I do not have a question here'});
        }
        else return res.status(200).json({generateQuestion});
    })
    .catch((err) => {
        console.log(err);
        if (err.name === 'CastError') {
            return next({ status: 422, message: 'You have not started on the path to enlightenment, please sign up to begin' });
        }
    });
}); 

module.exports = router;