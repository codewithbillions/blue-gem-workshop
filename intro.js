// How to declare a variable
// VAR LET CONST
// var surname = "lawal"
// let __name = "dolapo"
// const age = 22


// RULES FOR NAMING A VARIABLE
// 1) it cannot be a reserved key word!
// 2) should be meaningful
// 3) cannot start with a number
// 4)cannot contain a space or hyphen(-)
// 5) case sensitive

// you can declare a variable on the same line
// let firstName = 'Kehinde', lastName = 'billions';

// // modern ways IS
// let firstName = 'Kehinde';
// let lastName = 'billions';

// const amount = 200;
// amount = 500
// console.log(amount)

// PRIMITIVE TYPE/ VALUE TYPES
// strings
// numbers 
// boolean 
// undefined 
// null

// let name = 'kehinde'; //string literal
// let age = 40; // Number literals
// let isApproved = true; // boolean literals
// let firstName;    // undefined
// let selectedColor = null; 

// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(isApproved))
// console.log(typeof(firstName))
// console.log(typeof(selectedColor))

// >>>>>>>>>>
// REFERENCE TYPE

// object arrays function

// let person = {
//     name : "dolapo",
//     age: 22
// }

// // Dot notation 
// person.surname = 'lawal'

// // bracket notation
// person['occupation'] = 'C.E.O'

// console.log(person)

// ARRAYs
// A data structure we use to represent a list of items


// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green'
// console.log(selectedColors.length);

// function
// are one of the fundamental building blocks of javaScript. it performs a task and execute a value.

// function greet() {
//     console.log('hello world')
// }
// greet()

// function greet(name) {
//     console.log('hello ' + name)
// }
// greet("dolapo")

// function greet(name, surname) {
//     console.log('hello ' + name + " " + surname)
// }
// greet("dolapo", "lawal")

// function square(number) {
//     return number * number
// }

// console.log(square(2))

// STRING CONCATENATION

// let name = "dolapo";
// let age = 22;

// //Archaic method
//  console.log('My name isn\'t ' + name + ' and i am ' + age +' years old')

// // Template Literals Method
// console.log(`My name is ${name} and i am ${30*40} years old
// `)

// STRING METHODS AND PROPERTIES
// let s = 'HELLO WORLD'
// let val;

// // get length
// val = s.length
// console.log(val)

// //String Index
// console.log(s[4])

// // Change Case
// val = s.toLowerCase()
// val = s.toUpperCase()

// console.log(val)

// //to get the subString
// val = s.substring(5, 11)

// console.log(val)

// // Slit into array

// val = s.split("")

// console.log(val)

// ARRAY METHOD AND PROPERTIES
const colors = ['black', 'white', 'red', 'blue'];
// console.log(colors)

//get the length
// console.log(colors.length)

// get one value
// console.log(colors[3])

// //add to the end of array
// colors.push('yellow')


// // add to the beginning of arrray
// colors.unshift('purple')


// // Remove last value
// colors.pop();

// // Remove first value
// colors.shift();
// console.log(colors)

// // check if it an array
// console.log(Array.isArray(colors))

// ARITHMETIC OPERATORS
// // + , - , * , / , % , ++ , -- , **

// console.log(50 + 33)
// console.log(50 - 33)
// console.log(50 * 33)
// console.log(50 * 'dolapo')
// console.log(50 / 3)
// console.log(50 % 3)
// console.log(5 ** 4)
// console.log('5' * '5')
// console.log('5' + 5)


// let y = 5
// console.log(++y)
// console.log(--y)


// OBJECT LITERALS
// const person = {
//     firstName: 'dolapo',
//     age: 22,
//     hobbies: ['dancing', 'talking', 'playing'],
//     address: {
//         street: 'ikeja computer village',
//         city: 'ikeja',
//         state: 'Lagos'
//     }
// }
// person.email = "binarytech@binary.com"
// person.hobbies.push('disturbing')
// person.hobbies.unshift('sleeping')

// console.table(person)

// COMPARISON OPERATORS
// = assigns a value to a variable*

// == compares the value of the variables

// === compares the value and type of the variables

// ! returns the opposite boolean

// != compares the inequality based on value

// !== compares the inequality based on value and type

// LOOPS
// for loops

// for(let i = 0; i < 10;i++){
//     console.log(i);
// }

// // while loop
// let i = 0;
// while(i < 5) {
//     console.log(i);
//     i++
// }

const numbers = [40, 80, 22, 67, 90]

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] + 4)
// }

// // ********************** For...of Loop
// for (let x of numbers) {
// console.log(x);
// }

// // // ********************** For...in Loop

// for (let i in numbers) {
// console.log(numbers[i]);

// }

// CONDITIONALS
// if/Else Statement

// const x = 1

// if(x === 10) {
//     console.log('x is 10')
// } else if(x > 10) {
//     console.log('x is greater than 10')
// } else {
//     console.log('x is less than 10')
// }

// const color = 'black'

// if (color === 'red') {
//     console.log('color is red')
// }else if (color === 'yellow') {
//     console.log('color is yellow')
// }else if (color === 'purple') {
//     console.log('color is purple')
// }else if (color === 'blue') {
//     console.log('color is blue')
// } else {
//     console.log('color not found')
// }

// const age = 16

// if(age === 18) {
//     console.log('you can drink')
// } else if(age > 18) {
//     console.log('you can drink and drive')
// } else {
//     console.log('you cant drink and drive')
// }

// Switch Statement
//  let color = 'red'

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//             console.log('color is blue')
//         break;
//         default:
//             console.log('color is neither red nor blue')
// }


// Ternary operator
// condition ? true : false

//  let color = 'red'

// const colorCheck = color === 'blue'? 'color is red' : 'color is not red'
// console.log(colorCheck)


// ES6 Arrow function 

const sum = () => 2 + 2

console.log(sum())