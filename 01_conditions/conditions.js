// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1 
// Output: 0 
// var res = "";
// var a = -5;
// var b = -2;
// var c = -6;
// var d = 0;
// var e = -1;
// if (a > b && a > c && a > d && a > e) {
//     res = a;
// } else if (b > c && b > d && b > e) {
//     res = b;
// } else if (c > d && c > e) {
//     res = c;
// } else if (d > e) {
//     res = d;
// } else {
//     res = e;
// }
// console.log(res);


// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 

// var res = "";
// var x = 0;
// var y = -1;
// var z = 4;

// if (x > y && x > z) {
//     if (y > z) {
//         res = x + ", " + y + ", " + z;
//     } else
//         res = x + ", " + z + ", " + y;
// } else if (y > x && y > z) {
//     if (x > z) {
//         res = y + ", " + x + ", " + z;
//     }
//     else {
//         res = y + ", " + z + ", " + x;
// }
// else {
//     if (x > y) {
//         res = z + ", " + x + ", " + y;
//     
// } else {
//     res = z + ", " + y + ", " + x;
// }
// console.log(res);



// Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10  					Sample input: 7
// Output: 10 / 2 = 5					Output: X  


// var res = "";

// var w = 7;
// var r = w / 2;

// var isItNumber = typeof w === "number";
// var divByTwo = w % 2 === 0;

// if (isItNumber && divByTwo) {
//     res = w + " / 2" + " = " + r;
// } else {
//     res = "x";
// }
// console.log(res);



//// Write a program that compares two numbers and displays the larger. Display the result in the console.

// var res = "";

// var q = 9;

// var p = 20;

// if (p > q) {
//     res = p;
// }
// else if (q > p) {
//     res = q;
// } else { res = p + " is equal to " + q; }

// console.log(res);

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Sample Input: 60°C
// 	Output : 60°C is 140 °F



// var res = "";
// var tempInCel = 50;
// var tempInFarnheit = tempInCel * 1.8 + 32;
// res = tempInCel + "°C is " + tempInFarnheit + " °F";
// console.log(res);



// Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
// 	Sample Input: 11					Sample Input: 32
// 	Output : 2						Output : 38


// var b = 14;
// var res = b - 13;
// if (res > 13) {
//     res = res * 2;
// } else if (res < 0) {
//     res = res * -1;
// } else {
//     res;
// }

// console.log(res);

// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// 	Sample Input: 12,5					Sample Input: 8,8
// 	Output : 17						Output : 48


// var a = 5;
// var b = 5;
// var sum = a + b;
// if ( a === b) {
//     sum = sum * 3;
// } else {
//     sum;
// }

// console.log(sum);


// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
// 	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
// 	Output : -				Output : true				Output : true

var a = 5;
var b = 54;
var sum = a + b;

if 
