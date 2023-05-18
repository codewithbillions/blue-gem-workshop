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

// function binarySearch(arr, target){
// let leftIndex = 0;
// let rightIndex = arr.length -1

// while(leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if(target === arr[middleIndex]) {
//         return middleIndex
//     }
//     if(target < arr[middleIndex]) {
//         rightIndex = middleIndex - 1
//     } else {
//         leftIndex = middleIndex + 1
//         }
//     }
// return -1
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 4))
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))
// console.log(binarySearch([-5, 2, 4, 6, 10], 12))

//logarithmic - O(logn) which means input size reduced by half.

// SORTING ALGORITHM
// Bubble Sort
// Insert Sort
// Quick Sort
// Merge Sort

// Bubble Sort

// PROBLEM STATEMENT: Given an array of Integers Sort the Array.
// const arr = [-6, 20, 8, -2, 4]
// passing the array in bubble sort function should return the array in an ascending order.
// bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]

// Bubble sort idea.
// Compare adjacent element in the array and swap the position if they are not in the intended order.



// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for(let i = 0; i< arr.length; i++) {
//             if(arr[i] > arr[i+1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while(swapped)
// }

// const arr = [-6, -2, 4, 8, 20, 9, 0 , 3, 6]
// bubbleSort(arr)
// console.log(arr) // [-6, -2, 4, 8, 20];

// INSERT SORT
// problem: Given an array of integers, sort the array.
// const arr = [-6, 20, 8, -2, 4]
// passing the array insertion function should return the array in ascending order.
// insertionSort(arr) => Should return [-6, -2, 4, 8, 20]

// INSERT SORT idea
// lets first understand the idea of the insertion Sort
// with insertion sort you first split the array into sorted and unsorted part.
// Assume that the first element is already sorted  and the remaining unsorted.
// Select an unsorted element and compare with all the elements in the sorted part.
// if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger element in the sorted part towards the right.

// function insertionSort(arr) {
//     for(let i = 0; i < arr.length; i++ ) {
//         let numberToInsert = arr[i]
//         let j = i -1
//         while(j >= 0 && arr[j] > numberToInsert) {
//             arr[j+1] = arr[j]
//             j = j -1
//         }
//         arr[j+1] = numberToInsert
//     }

// }

// const arr =[8, 20, -2, 4, -6]
// insertionSort(arr)
// console.log(arr)

// >>>>>>>>>>>>>QUICK SORT
// Problem: Given an array of integers, sort the array.

// sorting can either be ascending or descending
// const arr =[-6, -2, 4, 8, 20]
// QuickSort(arr) => Should return [-6, -2, 4, 8, 20].

// Quick sort idea
// Identify the pivot element in the array
// you have plenty of option to choose from, you can either 
// - Pick first element as pivot
// - Pick last element as pivot
// - Pick a random element as pivot
// - Pick median as pivot

// then put everthing thats smaller than the pivot into the 'left' array and everything that's greater than pivot into the 'right' array.

// Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition.


// function quickSort(arr) {
//     if(arr.length < 2) {
//         return arr;
//     }

//     let pivot = arr[arr.length -1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length -1; i++) {
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

//  const arr = [8, 20, -2, 4, -6]
// console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]
// returns a sorted array.

// worst case complexity is O(n^2)
// average case is O(nlogn)

// >>>>>>>>>>> MERGE SORT
// Problem: Given an array of integers, sort the array.
// sorting can either be ascending or descending
// const arr = [-6, 20, 8, -2, 4]
// MergeSort => Should return [-6, -2, 4, 8, 20].

// Merge Sort idea
// -divide the array into sub arrays, each containing only one element(An array with one element is considered sorted)
// - repeatedly merge the sub arrays to produce new sorted sub-arrays until there is only one sub-array remaining. That will be the sorted array.


// function mergeSort(arr) {
//     if(arr.length < 2) {
//         return arr;
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr) {
// const sortedArr = []
//     while(leftArr.length && rightArr.length) {
//         if(leftArr[0] <= rightArr.length) {
//             sortedArr.push(leftArr.shift())
//         } else {
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(mergeSort(arr))// [-6, -2, 4, 8, 20]

// >>>>>>>>>>>>>>>> FACTORIAL OF A NUMBER
// problem statement: given an integer 'n', find the factorial of that integer
// in mathematics, the factorial of a non-negative integer 'n', denoted n! is the product of all positive integers less than or equal to 'n'

// Factorial of zero is 1.
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120


// function factorial(n) {
//     let result = 1
//     for(let i = 2; i <= n; i++) {
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(0)) // 1;
// console.log(factorial(1)) // 1;
// console.log(factorial(5)) // 120;

// >>>>>>>>>> FIBONACCI SEQUENCE
// problem _ Given a number 'n', find the 'n' element of the Fibonacci sequence.

// what is fibonacci sequence?? in mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

// {0,1,1,2,3,5,8,13,21,34,55,55+34=89,89+55=144,⋯}

// function fibonacci(n){
//     const fib = [0, 1]
//     for (let i = 2; i <= n; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }

//     return fib
// }

// console.log(fibonacci(2)) // [0,1]
// console.log(fibonacci(3)) // [0,1,1] // this is because the sum of previous two number is the sum.
// console.log(fibonacci(100)) // [0,1,1,2,3,5,8]

// >>>>>>>>POWER OF TWO
// problem: Given a positive integer 'n', determine if the number is a power of 2 or not.

// isPowerOfTwo(1) =true(2)
// isPowerOfTwo(2) = true(2)
// isPowerOfTwo(5) = false

// function isPowerOfTwo(n) {
//     if(n < 1) {
//         return false
//     }

//     while(n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//         }
//         return true
// }

// console.log(isPowerOfTwo(1)) // true
// console.log(isPowerOfTwo(2)) // true
// console.log(isPowerOfTwo(5)) // false

// >>>>>>>>>>>>>>>>>>>>>>RECURSION


// problem question: Given the number 'n', find the nth element of the fibonacci sequence.
// in mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
// EG
// The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5, 8...)

// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8

// if F represent a function to calculate the fibonacci number
// Fn = Fn-1 + Fn-2

// F2 = F1 + F0

// function recursiveFibonacci(n) { 
//     if (n < 2) {
//         return n
//     }
// return recursiveFibonacci(n-1) + recursiveFibonacci(n -2)
// }

// console.log(recursiveFibonacci(0)) // 0
// console.log(recursiveFibonacci(1))//  1
// console.log(recursiveFibonacci(6))//  8

// >>>>>RECURSIVE Factorial of a number
// problem: given an integer 'n', find the factoral of that integer

// the factorial of a non-negative integer 'n', denote n!, denoted n!, is the product of all positive integers less than or equal to 'n'.

// the factorial of 0 is 1.

// factorial(4) = 4*3*2*1 = 24
// factorial(5)= 5*4*3*2*1 = 120


function recursiveFactorial(n) {
        if (n === 0) {
            return 1
        }
     return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))