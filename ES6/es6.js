// VARIABLE

// variable scope
// it is the range by which a variable can be accessed

// ES6 gave us const and let

// global scope
// a scope that can be accessed anywhere in your code

// local scope
// a scope that can be accessed within a block of function

// const scope = () => {
//     const dolapo = "dolapo";

//     {
//         var clinton = "clinton"
//         let mustafa = "mustafa"
//         console.log("within the block", dolapo)
//     }
//     console.log("outside the block", clinton )
//     console.log("outside the block", mustafa )
// }

// scope()

// function sayHello(name) {
//     return "Hello " + name
// }

// const sayHello = (name) => {
//     return "Hello " + name
// }

// const sayHello = name => "Hello " + name
// const sayHello = name => `hello ${name}`

// console.log(sayHello("dolapo"))

// TERNARY OPERATOR

// let marks = 39

// let result = (marks >= 40) ? "passed" : "failed"

// console.log(`You ${result} the exam`)

// ARRAY
// MAP METHOD
// map create a new array from calling a function for every array element

// let array = [15, 24, 15, 26, 1, 8, 45]

// let array1 = array.map(el => el + 2)
// console.log(array)
// console.log(array1)

//FOR EACH METHOD
// the forEach method calls a function for each element in an array
// array = array.forEach(el => console.log(el * 2))

// FILTER METHOD
// it create a new array filled with element that passed a test provided by a function

// let array2 = array.filter((el) => el < 20)

// console.log(array2)

// REDUCE METHOD
// it add the previous element to the current element, reduces it to a single element

// let array3 = array.reduce((previous, current) => previous + current)
// console.log(array3)

// FIND METHOD

// it return a value of the first element that passes the test

// let array4 = array.find(el => el > 20)
// console.log(array4)

// FINDINDEX METHOD

// it return the index of the first element that passes the test and if no element is found it returns -1
// let array5 = array.findIndex(el => el > 25)
// console.log(array5)

// DESTRUCTURING + SPREAD.JS

// let user = {
//     name: "dolapo",
//     age: 26,
//     fullstack: {
//       track: "js",
//       skill: 'ES6',
//     },
//   };

//   let a = (user) => {
//     return `my name is ${user.name}, i'm ${user.age} and we are learning ${user.fullstack.track}:${user.fullstack.skill} `;
//   };

//   console.log(a(user));

// with destructuring


//   let user = {
//     name: "dolapo",
//     age: 26,
//     fullstack: {
//       track: "js",
//       skill: 'ES6',
//     },
//   };

//     let a = ({name, age, fullstack: {track, skill}}) => {
//     return `my name is ${name}, i'm ${age} and we are learning ${track}:${user.fullstack.skill} `;
//   };

//   console.log(a(user));


// SPREAD OPERATOR
  let user = {name: "dolapo", age: 26};
  let fullstack = { track: "js", skill: 'ES6'};

let fullInfo={...user, ...fullstack}

console.log(fullInfo)

