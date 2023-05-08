// // the problem : add the sum of three numbers
// var 1Nnum1 = 45
// var *_num2 = 55
// var __n@um3 = 43

// var mul = Nnum1 * _num2 * __num3

// console.log(mul)

//var name
// var NAME = 'yemi'

// /* console.log(NAME)*/
// var arr1 = ['g','o','m', 'y', 'code',  100, 3, NAME]

// for (i = 0; i < arr1.length; i++) {
//     console.log(arr1[0])
// }
// const address= 'yaba'
// const school = 'gomycode'

// person = {
//     name: 'dolapo',
//     isFemale: true,
//     address : [ address, school],
//     age: 18,
// }

// console.log(typeof(person.isFemale))



// function add() {
//     var num1 = 49
//     var num2 = 40
//     var num3 = 43
//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
// }

// add()

// num1 = 30
// num2 = 304
// num3 = 300

// sum = num1 + num2 + num3
// console.log(sum)

// INTRO TO ALGORITHM
// what is algorithm?
// a set of well-defined instruction to solving a particular problem

// inputs => algorithm => output

///cooking indomie
// inputs
//noodle, pepper, onions, boiled egg, sausage,pot, water gas, matches

//algorithm // recipe
//on the gas, place your pot on the gas, add some water in the pot, wait to boil for 2mins, 
// add noodles in boiling water, then put pepper and onion, wait for 1min, add sausage then leave for 5min, add boiled get to steam.

// output 
// cooked sweet noodles

// characteristics of algorithm
//1. well defined inputs and outputs
//2. Each step should be clear and unambiguous
//3. language independent

// absolute measure cant be used in algorithm because of these factors
// due to programming language, due to the computer the program runs on, 
// due to program running on the computer at the same time,
// due to the quality of operating SystemSecurityUpdate and others.

// because of these inconsistencies we evaluate the performance in terms of input size
// we do it in two ways
//1. time complexity- amount of time taken by an algorithm to run, as a funtion of input size
//2. space complexity- amount ofmemory taken by an algorithm to run, as a function of input size

// how do we represent the complexities
// Asymptotic Notation(Mathematical tools to represent time and space complexities).

// 1. big-O Notation-(worse case complexity)
// 2. Omega Notation- (best case complexity)
// 3. Theta Notation (Average case complexity)

//Objects - Big-O
// an object is a collection of key value pair

// const person = {
//     firstName: "john",
//     lastName: 'Doe'
// }

// person.age = 53
// delete(person.lastName)

// // insert - O(1)
// // remove - O(1)
// // access - O(1)

// console.log(person)

//array
// an array is an ordered collection of values

// const odd = [1, 3, 5, 7, 9]
// odd.push(11)
// console.log(odd)

// O(n) - linear time complexity

// worse case complexity is represented using big-O notation
// two basic characteristics

// 1 it is expressed in terms of input size
//2. it focuses on the bigger picture without getting caught in the minute details

// problem: find the sum of a natural number n.

// function summation(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum +=i
//     }
//     return sum
// }

// console.log(summation(100))

// linear O(n) means as the input increases the time complexities also increases

// function summation(n) {
//   return(n * (n + 1))/ 2;
// }


// console.log(summation(5))

// calculation not dependent on input size 
//constant O(1)

/// SEARCH ALGORITHM
//linear search

// problem statement: given an array of 'n' elements and the target element of 't',
// find the index of 't'in the array. return -1 if the target element is not Found.

// examples
// arr = [-5, 2, 10, 4, 6], t=10 --> should return 2
// arr = [-5, 2, 10, 4, 6], t=6--> should return 4
// arr = [-5, 2, 10, 4, 6], t=20--> should return -1

// function linearSearch(arr, target) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10))
// console.log(linearSearch([-5, 2, 10, 4, 6], 6))
// console.log(linearSearch([-5, 2, 10, 4, 6], 20))

//Binary Search
// Problem statement: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target elelment is not found.

// arr = [-5, 2, 4, 6, 10], t=10 --> should return 2
// arr = [-5, 2, 4, 6, 10] t=6--> should return 4
// arr = [-5, 2, 4, 6, 10], t=20--> should return -1

// divide and Conquer 
// must be sorted

function binarySearch(arr, target){
let leftIndex = 0;
let rightIndex = arr.length -1

while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]) {
        return middleIndex
    }
    if(target < arr[middleIndex]) {
        rightIndex = middleIndex - 1
    } else {
        leftIndex = middleIndex + 1
        }
    }
return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 4))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 12))

//logarithmic - O(logn) which means input size reduced by half.