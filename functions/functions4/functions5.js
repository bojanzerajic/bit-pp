////////////////////////// TASK 1 /////////////////////////

// function modifiedArray(array) {
//     var maxNumber;
//     var minNumberIndex = 0;
//     var maxNumberIndex = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] > array[maxNumberIndex]) {
//             maxNumber = array[i];
//             maxNumberIndex = i;
//         }
//         if (array[i] < array[minNumberIndex]) {
//             minNumberIndex = i;
//         }
//     }
//     array[maxNumberIndex] = array[minNumberIndex];
//     array[minNumberIndex] = maxNumber;
//     return array;
// }
// var a = [3, 500, 12, 149, 53, 414, 1, 19];
// var res = modifiedArray(a);

// console.log(res);

////////////////////////// TASK 2 /////////////////////////

// function dividedArray(array) {
//     var b = [];
//     for (var i = 0; i < array.length; i++) {
//         var sum = 0;
//         sum = array[i] / 2;
//         sum += 5;
//         b[i] = sum;
//         if (sum === 0) {
//             b[i] = 20;
//         }

//     }
//     return b;
// }

// var a = [3, 500, -10, 149, 53, 414, 1, 19];
// var res = dividedArray(a);

// console.log(res);

////////////////////////// TASK 3 /////////////////////////
// function peopleGrades(arrayNames, arrayPoints) {
//     var grade = "";
//     var studentGrades = "\n";
//     for (var i = 0; i < arrayPoints.length; i++) {
//         if (arrayPoints[i] > 50 && arrayPoints[i] <= 60) {
//             grade = " earned " + 6;
//         } else if (arrayPoints[i] > 60 && arrayPoints[i] <= 70) {
//             grade = " earned " + 7;
//         } else if (arrayPoints[i] > 70 && arrayPoints[i] <= 80) {
//             grade = " earned " + 8;
//         } else if (arrayPoints[i] > 80 && arrayPoints[i] <= 90) {
//             grade = " earned " + 9;
//         } else if (arrayPoints[i] > 90 && arrayPoints[i] <= 100) {
//             grade = " earned " + 10;
//         } else {
//             grade = " failed to complete the exam ";
//         }
//         studentGrades += arrayNames[i] + " acquired " + arrayPoints[i] + " points and" + grade + "\n"

//     }

//     return studentGrades;

// }

// var a = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
// var b = [50, 39, 63, 72, 99, 51, 83, 59];

// console.log(peopleGrades(a, b));

////////////////////////////////////////////// TASK 6 //////////////////////////////////////////////////

// var result;
// var sumOfEvenNumbers = 0;
// for (i = 0; i <= 1000; i += 2) {
//     sumOfEvenNumbers += i;
// }
// var sumOfOddNumbers = 0;
// for (j = 1; j < 500; j += 2) {
//     sumOfOddNumbers += j;
// }
// var result = (sumOfEvenNumbers - sumOfOddNumbers) * 12.5;

// console.log(result);

////////////////////////////////////////////// TASK 7 //////////////////////////////////////////////////

// function buildNewString(array) {
//     var newString = "";
//     for (var i = 0; i < array.length; i++) {
//         var string = array[i];
//         if (string.length >= 2 && typeof string === "string") {
//             newString += string[0] + string[1];
//         }
//     }
//     return newString;
// }

// var a = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
// var result = buildNewString(a)
// console.log(result);

////////////////////////////////////////////// TASK 8 //////////////////////////////////////////////////

// var invertString = function (string) {
//     var newString = "";
//     for (var i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//     }
//     return newString;
// }

// console.log(invertString(" Belgrade Institute of Technology"));

////////////////////////////////////////////// TASK 9 //////////////////////////////////////////////////

// var combination = function (n) {
//     var b = [];
//     for (var i = 1; i <= n; i++) {
//         for (var j = 1; j <= n; j++) {
//             if (j !== i) {
//                 b[b.length] = i + ", " + j;
//             }
//         }
//     }
//     return b;
// }

// console.log(combination(7));
// console.log(combination(7).length);

////////////////////////////////////////////// TASK 10 //////////////////////////////////////////////////












































