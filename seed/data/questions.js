module.exports = [
    {
        title: 'What\'s A String?',
        background: 'In JavaScript we would call a sentence or word a "string". Strings are made by putting single or double quotes around characters',
        example: '"I am a string", \'I am also a string\', I am not a string ',
        question: 'Find the string',
        answers: ['"Ninjas"', 34, true, "name"],
        correct: '"Ninjas"',
        level: 'academy',
        questionNumber: 1
    },
    {
        title: 'What\'s A Integer?',
        background: 'In JavaScript Integers are whole numbers',
        example: ' 1 2 3 4 5 ',
        question: 'Choose the number',
        answers: ['"Ninjas"', 34, true, "name"],
        correct: 34,
        level: 'academy',
        questionNumber: 2
    },
    {
        title: 'What\'s a Boolean?',
        background: 'A Boolean is a value of either true or false',
        example: 'true and false are both booleans',
        question: 'Choose the boolean',
        answers: ['"Ninjas"', 34, true, "name"],
        correct: true,
        level: 'academy',
        questionNumber: 3
        
    },
    {
        title: 'What\'s a Comment',
        background: 'Comments are notes you have written to tell other developers what is going on in your code. Comments are not part of the code. We write comments with single line comments with //, and multi line comments with /* The comment you have written goes here */ ',
        example: '// This is a one line comment, /* this is used for multi-line comments*/',
        question: 'How would you comment a single line?',
        answers: ['// karate chop', '/* high kick */', '/ dojo', '/ Kung Fu/'],
        correct: '// karate chop',
        level: 'academy',
        questionNumber: 4
    },
    {
        title: 'What\'s a variable?',
        background: 'As a program runs, it needs to hold information in its memory. This may be a number, the answer to a question or something else. variables allow us to store, change and access this information as the program runs.',
        example: 'let dog would be a variable called dog',
        question: 'How would you declare a variable called samurai?',
        answers: ['let samurai', 'let = samurai', 'let pet', 'let horse'],
        correct: 'let samurai',
        level: 'academy',
        questionNumber: 5
    },
    {
        title: 'Giving a variable information',
        background: 'In the last level you created a variable, now let\'s give it some information using = ',
        example: 'let dogs = 2 ',
        question: 'Select the samurai variable that has a value of 3',
        answers: ['let samurai = 9', 'let monkeys = 3', 'let samurai = 3', '3 = let samurai'],
        correct: 'let samurai = 3',
        level: 'gennin',
        questionNumber: 1
    },
    {
        title: 'What\'s camelCase',
        background: 'When variable names are made up of more than 1 word we use camelCase. This means that the first word is in lowercase and the next word we make the first letter a capital letter.',
        example: 'karateChop, myBirthday, masterOfInvisibility',
        question: 'Which of the following is camelCase',
        answers: ['Shadowhunter', 'ShadowWarrior', 'nightWarrior', 'mastersamurai'],
        correct: '"nightWarrior"',
        level: 'gennin',
        questionNumber: 2
    },
    {
        title: 'What\'s a console.log',
        background: 'To get Javascript to show on the screen we can use console.log',
        example: 'console.log(\'ninja\')',
        question: 'How would you show \'martial arts\'?',
        answers: ['console.log(\'martial arts\')', 'show me martial arts', 'get martial arts', 'console.log(Martial Arts)'],
        correct: 'console.log(\'martial arts\')',
        level: 'gennin',
        questionNumber: 3
    },
    {
        title: 'Adding Numbers',
        background: 'This is just like adding numbers in maths',
        example: 'To show it on the screen we could write console.log(15 + 12). If you wanted to put it onto a variable we could write let answer = 15 + 12',
        question: 'Which one would make the answer 30?',
        answers: ['"let answer = 8 + 12"', '"let answer = 25 + 3"', '"let answer = 18 + 12"', '"let answer = 17 + 23"'],
        correct: '"let answer = 18 + 12"',
        level: 'gennin',
        questionNumber: 4
    },
    {
        title: 'Subtracting Numbers',
        background: 'This is just like subtracting numbers in maths at school',
        example: 'To show it on the screen we could write console.log(22 - 12). If you wanted to put it onto a variable we could write let answer = 22 - 12',
        question: 'Which one would make the answer 18?',
        answers: ['"let answer = 28 - 12"', '"let answer = 33 - 15"', '"let answer = 27 - 14"', '"let answer = 17 - 27"'],
        correct: '"let answer = 33 - 15"',
        level: 'gennin',
        questionNumber: 5
    },
];