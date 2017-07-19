const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    title: String,
    background: String,
    example: String,
    question: String,
    answers: [],
    correct: String,
    level: String,
    questionNumber : Number
});
module.exports = mongoose.model('questions', QuestionSchema);