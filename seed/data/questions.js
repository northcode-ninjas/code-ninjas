module.exports = [
    {
        title: 'What\'s A String?',
        background: 'In JavaScript we would call a sentence or word a "string". Strings are made by putting single or double quotes around characters',
        example: '"I am a string", \'I am also a string\', I am not a string ',
        question: 'Find the string',
        answers: ['"Ninjas"', 34, 'true', 'name'],
        correct: '"Ninjas"',
        level: 0,
        questionNumber: 0
    },
    {
        title: 'What\'s An Integer?',
        background: 'In JavaScript Integers are whole numbers',
        example: ' 1 2 3 4 5 ',
        question: 'Choose the number',
        answers: ['"Ninjas"', 34, 'true', 'name'],
        correct: 34,
        level: 0,
        questionNumber: 1
    },
    {
        title: 'What\'s A Boolean?',
        background: 'A Boolean is a value of either true or false',
        example: 'true and false are both booleans',
        question: 'Choose the boolean',
        answers: ['"Ninjas"', 34, 'true', 'name'],
        correct: 'true',
        level: 0,
        questionNumber: 2
        
    },
    {
        title: 'What\'s a Comment',
        background: 'Comments are notes you have written to tell other developers what is going on in your code. Comments are not part of the code. We write comments with single line comments with //, and multi line comments with /* The comment you have written goes here */ ',
        example: '// This is a one line comment, /* this is used for multi-line comments*/',
        question: 'How would you comment a single line?',
        answers: ['// karate chop', '/* high kick */', '/ dojo', '/ Kung Fu/'],
        correct: '// karate chop',
        level: 0,
        questionNumber: 3
    },
    {
        title: 'What\'s camelCase',
        background: 'When variable names are made up of more than 1 word we use camelCase. This means that the first word is in lowercase and the next word we make the first letter a capital letter.',
        example: 'karateChop, myBirthday, masterOfInvisibility',
        question: 'Which of the following is camelCase',
        answers: ['Shadowhunter', 'ShadowWarrior', 'nightWarrior', 'mastersamurai'],
        correct: 'nightWarrior',
        level: 0,
        questionNumber: 4
    },
    {
        title: 'What\'s a variable?',
        background: 'As a program runs, it needs to hold information in its memory. This may be a number, the answer to a question or something else. variables allow us to store, change and access this information as the program runs.',
        example: 'let dog would be a variable called dog',
        question: 'How would you declare a variable called samurai?',
        answers: ['let samurai', 'let = samurai', 'let pet', 'let horse'],
        correct: 'let samurai',
        level: 1,
        questionNumber: 0
    },
    {
        title: 'Giving a variable information',
        background: 'In the last level you created a variable, now let\'s give it some information using = ',
        example: 'let dogs = 2 ',
        question: 'Select the samurai variable that has a value of 3',
        answers: ['let samurai = 9', 'let monkeys = 3', 'let samurai = 3', '3 = let samurai'],
        correct: 'let samurai = 3',
        level: 1,
        questionNumber: 1
    },
    {
        title: 'What\'s a prompt?',
        background: 'A prompt is what we use when we need information from a user. It can be used to give user information to a variable',
        example: 'let samuraiChoice = prompt("Do you choose Nunchucks, Shuriken or Origami?")' ,
        question: 'Select the code to prompt the ninja to select a weapon',
        answers: ['let ninjaChoice = prompt("Do you choose Nunchucks, Shuriken or Origami?")','let prompt = ("Do you choose Nunchucks, Shuriken or Origami?")','let ninjaChoice = Nunchucks, Shuriken or Origami','ninjaChoice = prom("Do you choose Nunchucks, Shuriken or Origami?")'],
        correct: 'let ninjaChoice = prompt("Do you choose Nunchucks, Shuriken or Origami?")',
        level: 1,
        questionNumber: 2
    },
    {
        title: 'JS Math',
        background: 'We can use JS to add, subtract, multiply and divide numbers. We use + to add, - to subtract, * to multiply, and / to divide.',
        example: 'let answer = 22 - 12 would give an answer of 10. let answer2 = 16 + 18 would give answer2 a value of 34. let answer3 = 5 * 4 would give answer3 a value of 20. let answer4 = 26 / 10 would give answer4 a value of 2.6',
        question: 'Which one would make the answer 18?',
        answers: ['let answer = 28 + 14', 'let answer = 33 - 25', 'let answer = 9 * 2', 'let answer = 20 / 5'],
        correct: 'let answer = 9 * 2',
        level: 1,
        questionNumber: 3
    },
    {
        title: 'Random Numbers',
        background: 'We have already learnt that we can use JS to do Maths for us, but did you know that it can even create random numbers',
        example: 'If you wanted a variable to create a random number we could write let answer = Math.random()',
        question: 'Which statement would make the enemy choose a random number?',
        answers: ['let enemyChoice = random()', 'let enemyChoice = random(number)', 'let random = enemyChoice', 'let enemyChoice = Math.random()'],
        correct: 'let enemyChoice = Math.random()',
        level: 1,
        questionNumber: 4
    },
    {
        title: 'Less than',
        background: 'We can discover whether a value is less than another using Javascript operators.',
        example: 'if there were less than 3 nunchucks, we could write it as nunchucks < 3',
        question: 'Which statement would show that there are less than 10 stars?',
        answers: ['let stars = Math.random()', 'stars > 10', 'stars = 10', 'stars < 10'],
        correct: 'stars < 10',
        level: 2,
        questionNumber: 0
    },
    {
        title: 'Greater than',
        background: 'We can also discover whether a value is greater than another with the greater than operator.',
        example: 'if there were more than 7 sensi, we could write it as sensi > 7',
        question: 'Which statement would show that there are more than 7 shuriken?',
        answers: ['let shuriken = 2 > 5', 'shuriken > 10', 'shuriken > 7', 'shuriken = 8'],
        correct: 'shuriken > 7',
        level: 2,
        questionNumber: 1
    },
    {
        title: 'Less than, Greater than, or Equal to',
        background: 'We can use <= to discover whether a variable is less than or equal to a value. Or >= to discover whether it is greater than or equal to it',
        example: '6 >= 6 and 2 <= 12',
        question: 'Select the answer that shows the 20 is less than or equal to 10?',
        answers: ['20 <= 10', '10 < 20', '10 <= 20', '20 > 10'],
        correct: '10 <= 20',
        level: 2,
        questionNumber: 2
    },
    {
        title: 'Equality Sign',
        background: 'The equality sign uses 3 equal signs and is used to check if values are equal',
        example: '3 === 3 would be true, but 3 === \'3\' would be false. Remember anything in quote marks is a string not a number',
        question: 'Which statement show that 7 is equal to 7',
        answers: ['7 equals 7', '7 === 7', '7 = 7', '7 === \'7\''],
        correct: '7 === 7',
        level: 2,
        questionNumber: 3
    },
    {
        title: 'And and Or Signs',
        background: 'This is the AND sign &&, it is used if both pieces of information are true. This is the OR sign ||, this is used if either pieces of information is true.',
        example: '(ninjas > 10 && sensi === 5), (stealth === 5 || dark === 10)',
        question: 'Which one shows that ninjas or sensi equal 20',
        answers: ['(ninjas === 20 && sensi === 20)','(ninjas === 25 || sensi === 20)', '(ninjas === 20 || sensi === 20)', '(ninjas === 20 || sensi === 25)'],
        correct: '(ninjas === 20 || sensi === 20)',
        level: 2,
        questionNumber: 4
    },
    {
        title: 'If Statments',
        background: 'With JavaScript we can choose to do something if a condition is met using an if statement',
        example: 'if (enemyChoice < 3) { enemyChoice = nunchucks }',
        question: 'Which statement would make the enemy choose a star when they have a value of less than 10?',
        answers: ['if (enemyChoice > 10) { enemyChoice = star }', 'if (enemyChoice < 10) { enemyChoice = nunchucks }', 'if (enemyChoice < 20) { enemyChoice = star }', 'if (enemyChoice < 10) { enemyChoice = star }'],
        correct: 'if (enemyChoice < 10) { enemyChoice = star }',
        level: 3,
        questionNumber: 0
    },
    {
        title: 'If Else Statments',
        background: 'With else statments we can choose what to do when the if condition isn\'t met',
        example: 'if (enemyChoice < 3) { enemyChoice = nunchucks } else { enemyChoice = origami }',
        question: 'Which statement would make the enemy choose a shuriken when they have a value of 16?',
        answers: ['if (enemyChoice < 3) { enemyChoice = shuriken } else { enemyChoice = origami }', 'if (enemyChoice > 9) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 
                'if (enemyChoice < 15) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 'if (enemyChoice <= 15) { enemyChoice = shuriken } else { enemyChoice = origami }'],
        correct: 'if (enemyChoice < 15) { enemyChoice = nunchucks } else { enemyChoice = shuriken }',
        level: 3,
        questionNumber: 1
    },
    {
        title: 'If Else Statments',
        background: 'Let\'s try another If Else Statement',
        example: 'if (enemyChoice > 6) { enemyChoice = nunchucks } else { enemyChoice = origami }',
        question: 'Which statement would make the enemy choose origami when they have a value of 4?',
        answers: ['if (enemyChoice > 5) { enemyChoice = shuriken } else { enemyChoice = origami }', 'if (enemyChoice > 9) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 
                'if (enemyChoice < 15) { enemyChoice = nunchucks } else { enemyChoice = shuriken }', 'if (enemyChoice <= 15) { enemyChoice = shuriken } else { enemyChoice = origami }'],
        correct: 'if (enemyChoice > 5) { enemyChoice = shuriken } else { enemyChoice = origami }',
        level: 3,
        questionNumber: 2
    },
    {
        title: 'If Else Statments',
        background: 'Let\'s try another If Else Statement',
        example: 'if (enemyChoice = true) { enemyChoice = nunchucks } else { enemyChoice = origami }',
        question: 'Which statement would make you a ninja?',
        answers: ['if (ninjaLevel = true) { status = ninja } else { status = ninjaInTraining }', 'if (ninjaLevel = false) { status = ninja } else { status = ninjaInTraining }', 
                'if (ninjaLevel = true) { status = ninjaInTraining } else { status = ninja }', 'if (ninjaLevel = false) { status is ninja } else { status is not a ninja }'],
        correct: 'if (ninjaLevel = true) { status = ninja } else { status = ninjaInTraining }',
        level: 3,
        questionNumber: 3
    },
    {
        title: 'If Else Statments',
        background: 'If Else statements can be linked so that you can give your program more outcomes',
        example: 'if (ninjaLevel = "Academy") { colour = "white" } else if ( ninjaLevel = "Gennin" ) { colour = "Yellow" } else if ( ninjaLevel = "Chunnin" ) { colour = "Orange" } else { colour = "Working towards black belt" }',
        question: 'How would we get a tiny clan if there are fewer than 5 ninjas, a small clan if there are less than 10 ninjas, a medium clan if there are fewer than 15 ninjas and a large ninja if there are more?',
        answers: ['if (ninjaNum < 5) { clan = "tiny" } else if ( ninjaNum < 10 ) { clan = "small" } else if ( ninjaNum < 15 ) { clan = "medium" } else { clan = "large" }', 
        'if (ninjaNum = 2) { clan = "tiny" } else if ( ninjaNum < 8 ) { clan = "small" } else if ( ninjaNum < 12 ) { clan = "medium" } else { clan = "large" }',
        'if (ninjaNum > 10) { clan = "tiny" } else if ( ninjaNum < 18 ) { clan = "small" } else if ( ninjaNum < 12 ) { clan = "medium" } else { clan = "massive" }',
        'if (ninjaNum = 12) { clan = "tiny" } else if ( ninjaNum < 10 ) { clan = "small" } else if ( ninjaNum < 19 ) { clan = "medium" } else { clan = "large" }',],
        correct: 'if (ninjaNum < 5) { clan = "tiny" } else if ( ninjaNum < 10 ) { clan = "small" } else if ( ninjaNum < 15 ) { clan = "medium" } else { clan = "large"}',
        level: 3,
        questionNumber: 4
    },
    {
        title: 'Arrays',
        background: 'An Array is a like making a list. We can put anything we want in arrays. We need to start an array with [, end an array with ], then separate the items with commas',
        example: 'let myArray = ["stars", 4, "nunchucks", false]',
        question: 'How would you make an array with Academy, 15 and true?',
        answers: ['let myArray = "Academy", 4, "nunchuck", false, let myArray = ["Academy", 4, "nunchuck", false], let myArray = ["Academy" 4 "nunchuck" false], let myArray = "Academy" 4 "nunchuck" false'],
        correct: 'let myArray = ["Academy", 4, "nunchuck", false]',
        level: 4,
        questionNumber: 0
    },
    {
        title: 'Array Indexes',
        background: 'An Array is a list. The order matters, but how can we get the first, second, third etc item. In JS, we start counting from 0',
        example: 'let myArray = ["stars", 4, "nunchucks", false], myArray[0] would give you stars, myArray[1] would give you 4, myArray[2] would give you nunchucks, myArray[3] would give you false',
        question: 'let yourArray = ["stealth", "invisible", 20] How would you get the word "invisible" from yourArray?',
        answers: ['yourArray[0], yourArray[1], yourArray[2], yourArray[invisible]'],
        correct: 'yourArray[1]',
        level: 4,
        questionNumber: 1
    },
    {
        title: 'Changing Data with Array Indexes',
        background: 'So now that you know that we start counting from 0, we can use this to change data in our arrays',
        example: 'let myInfo = [1, 2, 3, 4, 5]. If we wanted to change 1 to 21, we would write myInfo[0] = 21, myInfo would now equal [21, 2, 3, 4, 5].',
        question: 'let training = ["camouflage yourself", "practice jumping", "learn sparring", "eat healthily"] How would you change the word "eat healthily" to "climb trees"?',
        answers: ['training[0] = "climb trees", training[1] = "climb trees", training[2] = "climb trees", training[3] = "climb trees"'],
        correct: 'training[3] = "climb trees"',
        level: 4,
        questionNumber: 2
    },
    {
        title: 'Array Length',
        background: 'We can see how many items there are inside an array by using .length',
        example: 'let myArray = ["stars", 4, "nunchucks", false]. To see how long the myArray array is we can use myArray.length which would give us 4.',
        question: 'let ninjas = ["Harry", "Larry", "Curly", "Mo", "Sophie"]. How would you find the length of an array?',
        answers: ['ninjaslength, let ninjas.length, ninjas.length, length.ninjas'],
        correct: 'ninjas.length',
        level: 4,
        questionNumber: 3
    },
    {
        title: 'Adding to an array',
        background: 'We can add items to the end of an array by using a method called push(). Whatever we want to add to the array will go inside the brackets',
        example: 'let myArray = ["stars", 4, "nunchucks", false]. To add "ninjas" to myArray, we would write myArray.push("ninjas")',
        question: 'let ninjas = ["Harry", "Larry", "Curly", "Mo", "Sophie"]. How would you add "Hazel" to the ninjas array?',
        answers: ['push("Hazel").ninjas, ninjapush("Hazel"), "Hazel" = ninjas, ninjas.push("Hazel")'],
        correct: 'ninjas.push("Hazel")',
        level: 4,
        questionNumber: 4
    },
    {
        title: 'Removing things from an array',
        background: 'In the last question we learnt about adding items to the end of an array by using push(). Now we are going to remove the last item using pop()',
        example: 'let myArray = ["stars", 4, "nunchucks", false]. To remove false from myArray, we would write myArray.pop()',
        question: 'let ninjas = ["Harry", "Larry", "Curly", "Mo", "Sophie"]. How would you remove "Sophie" from the ninjas array?',
        answers: ['push("Sophie").ninjas, ninjapop("Sophie"), "Sophie" = ninjas, ninjas.pop()'],
        correct: 'ninjas.pop()',
        level: 5,
        questionNumber: 0
    },
    {
        title: 'Console.log',
        background: 'We use console.log to show a result on the screen',
        example: 'console.log("Well done Ninja") would output "Well done Ninja" on the screen / console',
        question: 'How would you output "Keep Training"?',
        answers: ['consoleLog("Keep Training"), console.bog("Keep Training"), "console.log("Keep Training"), console.dog("Keep Training")'],
        correct: 'console.log("Keep Training")',
        level: 5,
        questionNumber: 1
    },
    {
        title: 'Return',
        background: 'A return statement sorts the value of a variable so that it can be reused later',
        example: 'return 1 + 3',
        question: 'What would the following return statement return? return 5 * 2',
        answers: ['5, 2, 7, 10'],
        correct: '10',
        level: 5,
        questionNumber: 2
    },
    {
        title: 'Fun with Functions',
        background: 'A function is a block of reusable code that , when called, perform tasks. Imagine a dog that does the same trick only when asked. Except you do not need dog treats to make your code perform. In programming, these code blocks are called functions.',
        example: 'function myFunction() { console.log("this is a function") } This function would console log the string "this is a function"',
        question: 'How would you create a function called welcomeNinja that puts "Hello Ninja" on the console?',
        answers: ['function() {console.log("Hello Ninja")}, function welcomeNinja() {console.log("Hello Ninja")}, welcomeNinja() {console.log("Hello Ninja")}, function(welcomeNinja) {console.log("Hello Ninja")}'],
        correct: 'function welcomeNinja() {console.log("Hello Ninja")}',
        level: 5,
        questionNumber: 3
    },
    {
        title: 'More Fun With Functions',
        background: 'There are many ways to use functions, but here we are going to practice returning from one',
        example: 'function myFunction() { return "this is a function" } This function would always return the string "this is a function"',
        question: 'How would you create a function called enemyApproaching that returns "Ninja attack"?',
        answers: ['function() {return("Hello Ninja")}, function enemyApproaching() {return "Ninja attack"}, welcomeNinja() {return "Hello Ninja"}, function(enemyApproaching) {console.log "Ninja Attack"}'],
        correct: 'function enemyApproaching() {return "Ninja attack"}',
        level: 5,
        questionNumber: 4
    },
    {
        title: 'Parameters',
        background: 'Parameters are variables in a functions brackets',
        example: 'function myFunction(parameter1, parameter2) { console.log(parameter1, parameter2) } This function would console log parameter1 and parameter2',
        question: 'Which function would return "Hello" and "Ninja"?',
        answers: ['function("Hello", "Ninja") {return("Hello Ninja")}, function welcomeNinja() {return "Hello""Ninja"}, function welcomeNinja("Hello", "Ninja") {return "Hello" "Ninja"}, function(enemyApproaching) {console.log "Hello" "Ninja"}'],
        correct: 'function welcomeNinja("Hello", "Ninja") {return "Hello" "Ninja"}',
        level: 6,
        questionNumber: 0
    },
    {
        title: 'Invoking a function',
        background: 'To get a result from a function we first need to "call" or "invoke" a function, eg welcome("Ninja"). We write the function name, then put our arguments in the functions bracket. ',
        example: 'function myName(name) {console.log(name)} myName("loneninja") would print out "loneninja"',
        question: 'function myNinja(name) {console.log(name)}. How would we invoke myNinja function with the name "Kai"',
        answers: ['myNinja=Kai, myNinja[kai], myNinja("Kai"), Kai is myNinja'],
        correct: 'myNinja("Kai")',
        level: 6,
        questionNumber: 1
    },
    {
        title: 'Functions with maths',
        background: 'We can use function to do maths',
        example: 'function myAddition(a, b) {console.log(a + b)} We can now put any numbers instead of a and b. To get the result we would call the function with our numbers like this: myAddition(12, 5) prints out 17',
        question: 'function myAddingFunction(a, b) {console.log(a + b)} How would we invoke myAddingFunction to give 20',
        answers: ['myAddingFunction=(10, 10), myAddingFunction[20], 20 is myAddingFunction, myAddingFunction(15, 5)'],
        correct: 'myAddingFunction(15, 5)',
        level: 6,
        questionNumber: 2
    },
    {
        title: 'Functions with maths II',
        background: 'We can use function to do more maths',
        example: 'function myDivision(a, b) {console.log(a / b)} myDivision(12, 3) would print out the number 4',
        question: 'function myMultiplication(a, b) {console.log(a * b)} How would we invoke myMultiplication to give 36',
        answers: ['myMultiplication(9, 4), myMultiplication=(9, 4), myMultiplication[36], 36 is myMultiplication'],
        correct: 'myMultiplication(9, 4)',
        level: 6,
        questionNumber: 3
    },
    {
        title: 'Functions with maths III',
        background: 'We can use function to do even more maths',
        example: 'function mySubtraction(a, b) {console.log(a - b)} myRemainder(12, 5) would print out the number 7',
        question: 'function mySubtraction(a, b) {console.log(a * b)} How would we invoke mySubtraction to give 10',
        answers: ['mySubtraction(12, 2), mySubtraction=(12, 4), mySubtraction[10], 10 is mySubtraction'],
        correct: 'mySubtraction(12, 2)',
        level: 6,
        questionNumber: 4
    },
];