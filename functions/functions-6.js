
"use strict";

//////////task 1///////////////////

// Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

// var vowelCounter = function (string) {
//     var counter = 0;
//     var newString = string.toLowerCase();
//     for (var i = 0; i < newString.length; i++) {
//         if (newString[i] === "a" || newString[i] === "e" || newString[i] === "i" || newString[i] === "o" || newString[i] === "u") {
//             counter++;
//         }
//     }
//     return counter;
// }
// ;
// console.log(vowelCounter("avokadoooooo"));

/////////////////////////////////////task2////////////////////////////////

// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

// var combineArrays = function (arrayOne, arrayTwo) {
//     var res = [];
//     for (var i = 0; i < arrayOne.length; i++) {
//         res.push(arrayOne[i]);
//         res.push(arrayTwo[i]);
//     }
//     return res;
// }
// console.log(combineArrays(['a', 'b', 'c'], [1, 2, 3]));

///////////////////////////////////////// task3 ///////////////////////////////////////

// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]


// var rotatedArray = function (array, index) {

//     var slicedArray = array.slice(index, array.length);
//     for (var i = 0; i < index; i++) {
//         slicedArray.push(array[i]);
//     }
//     return slicedArray;
// }
// console.log(rotatedArray([1, 2, 3, 4, 5, 6], 2));

///////////////////////////////////////////task 4 ////////////////////////////////////////////

// Write a function that takes a number and returns array of its digits.

// var numberToArray = function (number) {
//     var newArray = [];
//     var stringNumber = number.toString(10);
//     for (var i = 0; i < stringNumber.length; i++) {
//         if (stringNumber[i] !== '.') {
//             newArray.push(stringNumber[i]);
//         }
//     }
//     return newArray;
// }
// console.log(numberToArray(123456789));

///////////////////////////////////////// task 5 /////////////////////////////////////////////////

// Write a program that prints a multiplication table for numbers up to 12.

// var mulTable = function (number) {
//     for (var i = 1; i <= number; i++) {
//         for (var j = 1; j <= number; j++) {
//             console.log('res => ' + i + " * " + j + " = " + i*j);

//         }
//     }
// }
// mulTable(12);

/////////////////////////////////////////// task 6 /////////////////////////////////

// Write a function to input temperature in Centigrade and convert to Fahrenheit.
// F = C * 1.8 + 32


// console.log((function (tempInCel) {
//     var tempInFarenheit;
//    tempInFarenheit = tempInCel * 1.8 + 32;
//    return tempInFarenheit;
// })(39.2));

////////////////////////////////////////// task 7 ////////////////////////////////////////////////////

// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

// var filterArrayAndFindMax = function (array) {
//     var newArray = [];
//     var maxNumber = array[0];
//     for (var i = 0; i < array.length; i++) {
//         if (typeof array[i] !== 'number') {
//             continue;
//         }
//         newArray.push(array[i]);
//         if (array[i] > maxNumber) {
//             maxNumber = array[i];
//         }
//     }
//     var sortedArray = newArray.sort(function (a, b) { return (a - b) });
//     return sortedArray + " ," + maxNumber;
// }
// console.log(filterArrayAndFindMax([10, 15, 1, 'bla', 1000, true, 66, 69, 3, 2]));

/////////////////////////////////////// task 8 /////////////////////////////////

// Write a function to find the maximum and minimum elements. Function returns an array.

// var minAndMax = function (array) {
//     var res = [];
//     var sortedArray = array.sort(function (a, b) { return (a - b) });
//     res.push(sortedArray[0]);
//     res.push(sortedArray[sortedArray.length-1]);
//     return res;

// }
// console.log(minAndMax([10, 200, 500, 1000, 1, 6, 9, 50]));

//////////////////////////////////////////// task 9 ///////////////////////////////////

///////////////////////////////////////////task 10 ///////////////////////////////////////

//////////////////////////////////////// task 11 ///////////////////////////////////////////

// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

// var firstMiddleLast = function (array) {
//     var res = [];
//     if (array.length % 2 === 0) {
//         res.push(array[0]);
//         res.push(array[array.length - 1]);
//     } else {
//         res.push(array[0]);
//         res.push(array[(array.length - 1) / 2]);
//         res.push(array[array.length - 1]);
//     }

//     return res;
// }
// console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 7]));



