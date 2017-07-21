module.exports = [
    {
        title: 'What\'s A String?',
        background: 'In JavaScript we would call a sentence or word a "string". Strings are made by putting single or double quotes around characters',
        example: '"I am a string", \'I am also a string\', I am not a string ',
        question: 'Find the string',
        answers: ['"Ninjas"', 34, true, 'name'],
        correct: '"Ninjas"',
        level: 1,
        questionNumber: 1
    },
    {
        title: 'What\'s A Integer?',
        background: 'In JavaScript Integers are whole numbers',
        example: ' 1 2 3 4 5 ',
        question: 'Choose the number',
        answers: ['"Ninjas"', 34, true, 'name'],
        correct: 34,
        level: 1,
        questionNumber: 2
    },
    {
        title: 'What\'s a Boolean?',
        background: 'A Boolean is a value of either true or false',
        example: 'true and false are both booleans',
        question: 'Choose the boolean',
        answers: ['"Ninjas"', 34, true, 'name'],
        correct: true,
        level: 1,
        questionNumber: 3
        
    },
    {
        title: 'What\'s a Comment',
        background: 'Comments are notes you have written to tell other developers what is going on in your code. Comments are not part of the code. We write comments with single line comments with //, and multi line comments with /* The comment you have written goes here */ ',
        example: '// This is a one line comment, /* this is used for multi-line comments*/',
        question: 'How would you comment a single line?',
        answers: ['// karate chop', '/* high kick */', '/ dojo', '/ Kung Fu/'],
        correct: '// karate chop',
        level: 1,
        questionNumber: 4
    },
    {
        title: 'What\'s camelCase',
        background: 'When variable names are made up of more than 1 word we use camelCase. This means that the first word is in lowercase and the next word we make the first letter a capital letter.',
        example: 'karateChop, myBirthday, masterOfInvisibility',
        question: 'Which of the following is camelCase',
        answers: ['Shadowhunter', 'ShadowWarrior', 'nightWarrior', 'mastersamurai'],
        correct: '"nightWarrior"',
        level: 1,
        questionNumber: 5
    },
    {
        title: 'What\'s a variable?',
        background: 'As a program runs, it needs to hold information in its memory. This may be a number, the answer to a question or something else. variables allow us to store, change and access this information as the program runs.',
        example: 'let dog would be a variable called dog',
        question: 'How would you declare a variable called samurai?',
        answers: ['let samurai', 'let = samurai', 'let pet', 'let horse'],
        correct: 'let samurai',
        level: 2,
        questionNumber: 1
    },
    {
        title: 'Giving a variable information',
        background: 'In the last level you created a variable, now let\'s give it some information using = ',
        example: 'let dogs = 2 ',
        question: 'Select the samurai variable that has a value of 3',
        answers: ['let samurai = 9', 'let monkeys = 3', 'let samurai = 3', '3 = let samurai'],
        correct: 'let samurai = 3',
        level: 2,
        questionNumber: 2
    },
    {
        title: 'What\'s a prompt?',
        background: 'A prompt is what we use when we need information from a user. It can be used to give user information to a variable',
        example: 'let samuraiChoice = prompt("Do you choose Nunchucks, Shuriken or Origami?")' ,
        question: 'Select the code to prompt the ninja to select a weapon',
        answers: ['let ninjaChoice = prompt("Do you choose Nunchucks, Shuriken or Origami?")','let prompt = ("Do you choose Nunchucks, Shuriken or Origami?")','let ninjaChoice = Nunchucks, Shuriken or Origami','ninjaChoice = prom("Do you choose Nunchucks, Shuriken or Origami?")'],
        correct: 'let ninjaChoice = prompt("Do you choose Nunchucks, Shuriken or Origami?")',
        level: 2,
        questionNumber: 3
    },
    {
        title: 'JS Math',
        background: 'We can use JS to add, subtract, multiply and divide numbers. We use + to add, - to subtract, * to multiply, and / to divide.',
        example: 'let answer = 22 - 12 would give an answer of 10. let answer2 = 16 + 18 would give answer2 a value of 34. let answer3 = 5 * 4 would give answer3 a value of 20. let answer4 = 26 / 10 would give answer4 a value of 2.6',
        question: 'Which one would make the answer 18?',
        answers: ['let answer = 28 + 14', 'let answer = 33 - 25', 'let answer = 9 * 2', 'let answer = 20 / 5'],
        correct: 'let answer = 9 * 2',
        level: 2,
        questionNumber: 4
    },
    {
        title: 'Random Numbers',
        background: 'We have already learnt that we can use JS to do Maths for us, but did you know that it can even create random numbers',
        example: 'If you wanted a variable to create a random number we could write let answer = Math.random()',
        question: 'Which statement would make the enemy choose a random number?',
        answers: ['let enemyChoice = random()', 'let enemyChoice = random(number)', 'let random = enemyChoice', 'let enemyChoice = Math.random()'],
        correct: 'let enemyChoice = Math.random()',
        level: 2,
        questionNumber: 5
    },
    {
        title: 'Less than',
        background: 'We can discover whether a value is less than another using Javascript operators.',
        example: 'if there were less than 3 nunchucks, we could write it as nunchucks < 3',
        question: 'Which statement would show that there are less than 10 stars?',
        answers: ['let stars = Math.random()', 'stars > 10', 'stars = 10', 'stars < 10'],
        correct: 'stars < 10',
        level: 3,
        questionNumber: 1
    },
    {
        title: 'Greater than',
        background: 'We can also discover whether a value is greater than another with the greater than operator.',
        example: 'if there were more than 7 sensi, we could write it as sensi > 7',
        question: 'Which statement would show that there are more than 7 shuriken?',
        answers: ['let shuriken = 2 > 5', 'shuriken > 10', 'shuriken > 7', 'shuriken = 8'],
        correct: 'shuriken > 7',
        level: 3,
        questionNumber: 2
    },
    {
        title: 'Less than, Greater than, or Equal to',
        background: 'We can use <= to discover whether a variable is less than or equal to a value. Or >= to discover whether it is greater than or equal to it',
        example: '6 >= 6 and 2 <= 12',
        question: 'Select the answer that shows the 20 is less than or equal to 10?',
        answers: ['20 <= 10', '10 < 20', '10 <= 20', '20 > 10'],
        correct: '10 <= 20',
        level: 3,
        questionNumber: 3
    },
    {
        title: 'Equality Sign',
        background: 'The equality sign uses 3 equal signs and is used to check if values are equal',
        example: '3 === 3 would be true, but 3 === \'3\' would be false. Remember anything in quote marks is a string not a number',
        question: 'Which statement show that 7 is equal to 7',
        answers: ['7 equals 7', '7 === 7', '7 = 7', '7 === \'7\''],
        correct: '7 === 7',
        level: 3,
        questionNumber: 4
    },
    {
        title: 'And and Or Signs',
        background: 'This is the AND sign &&, it is used if both pieces of information are true. This is the OR sign ||, this is used if either pieces of information is true.',
        example: '(ninjas > 10 && sensi === 5), (stealth === 5 || dark === 10)',
        question: 'Which one shows that ninjas or sensi equal 20',
        answers: ['(ninjas === 20 && sensi === 20)','(ninjas === 25 || sensi === 20)', '(ninjas === 20 || sensi === 20)', '(ninjas === 20 || sensi === 25)'],
        correct: '(ninjas === 20 || sensi === 20)',
        level: 3,
        questionNumber: 5
    },
    {
        title: 'If Statments',
        background: 'With JavaScript we can choose to do something if a condition is met using an if statement',
        example: 'if (enemyChoice < 3) { enemyChoice = nunchucks }',
        question: 'Which statement would make the enemy choose a star when they have a value of less than 10?',
        answers: ['if (enemyChoice > 10) { enemyChoice = star }', 'if (enemyChoice < 10) { enemyChoice = nunchucks }', 'if (enemyChoice < 20) { enemyChoice = star }', 'if (enemyChoice < 10) { enemyChoice = star }'],
        correct: 'if (enemyChoice < 10) { enemyChoice = star }',
        level: 4,
        questionNumber: 1
    },
    {
        title: 'Else Statments',
        background: 'With else statments we can choose what to do when the if condition isn\'t met',
        example: 'if (enemyChoice < 3) { enemyChoice = nunchucks } else { enemyChoice = origami }',
        question: 'Which statement would make the enemy choose a shuriken when they have a value of 16?',
        answers: ['if (enemyChoice < 3) { enemyChoice = shuriken } else { enemyChoice = origami }', 'if (enemyChoice > 9) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 
                'if (enemyChoice < 15) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 'if (enemyChoice <= 15) { enemyChoice = shuriken } else { enemyChoice = origami }'],
        correct: 'if (enemyChoice < 15) { enemyChoice = nunchucks } else { enemyChoice = shuriken }',
        level: 4,
        questionNumber: 2
    },
    {
        title: 'Else Statments',
        background: 'With else statments we can choose what to do when the if condition isn\'t met',
        example: 'if (enemyChoice < 3) { enemyChoice = nunchucks } else { enemyChoice = origami }',
        question: 'Which statement would make the enemy choose a shuriken when they have a value of 16?',
        answers: ['if (enemyChoice < 3) { enemyChoice = shuriken } else { enemyChoice = origami }', 'if (enemyChoice > 9) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 
                'if (enemyChoice < 15) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 'if (enemyChoice <= 15) { enemyChoice = shuriken } else { enemyChoice = origami }'],
        correct: 'if (enemyChoice < 15) { enemyChoice = nunchucks } else { enemyChoice = shuriken }',
        level: 4,
        questionNumber: 3
    },
];