// Functions

// //  Methods = Built-in Functions!
// // Functions provide resuable Code

// // e.g.
// "John".toLowerCase();
// Math.random();

// // Function Declaration Syntax

// //    first example
// function sum() {
//   return 2 + 2;
// }
// console.log(sum());

// //    second example
// function sum2(num1, num2) {
//   console.log(num1);
//   console.log(num2);

//   return num1 + num2;
// }

// console.log(sum2(2, 6));

// //    third example

// function sum3(num1, num2) {
//   if (num2 === undefined) {
//     return num1 + num1;
//   }

//   return num1 + num2;
// }

// console.log(sum3(3));

// // Different ways to declare a function
// function getUserNameFromEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("lolMyEmail@doNotLook.com"));

// // If you don't provide a name for an function it is a anonymous function
// // same result as the exmaple before
// const getUserNameFromEmail = function (email) {
//   return email.slice(0, email.indexOf("@"));
// };
// console.log(getUserNameFromEmail("lolMyEmail@doNotLook.com"));

// // Arrow functions
// // same result as the exmaples before
// const getUserNameFromEmail = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };
// console.log(getUserNameFromEmail("lolMyEmail@doNotLook.com"));

// // You can use const and let to declare functions and arrow functions. most of the time const is the better option

// // put word into proper Case. The first letter is upper case the remains is lower case
// const toProperCase = (name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };

// console.log(toProperCase("jOhN"));
