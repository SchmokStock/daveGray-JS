// var, let, and const

/*
--Global = Not in a function or block. 
-> not desirable because it can cause mistakes and confusion, are available everywhere.
--Local = In a funtion or block. Not global.
-> It can be a function nested inside a function or block nested inside a block or function in block or block in function.
--var instantiates fuunction() scoped variables.
-> var ignores block scope values
--let and const instantiate {block} scoped variables.

Helpful Tips!
--Avoid using var. Stick with const and let.
--Use const unless you need a resassign value.
--Use let if you know you will reassign value.
*/

// #################
// #################

// // Difference between var, let and const
// // you can redefine the same variable with var
// // imagine working in a team or pulling multiple js scripts together. This could be quite confusing
// var x = 1;
// var x = 2;
// console.log(x);

// // would cause an error. this is desirable because this disable the debugging problem of var
// let x = 1;
// let x = 2;
// console.log(x);

// // reassignment with let
// let x = 1;
// x = 2;
// console.log(x);

// // throws an error. This makes const in most cases the mosst desirable variable.
// // If you have to reassign a value then you use let
// const x = 1;
// x = 2;
// console.log(x);

// #################
// #################

// // Scopes
// // to test if a variable is available in a local scope or a global scope, just use console.log()

// // global scope
// // Variables of global scope are available everywhere on each scope level
// var x = 1;
// let y = 2;
// const z = 3;

// // local scope
// // in can be more than one type of local scope
// // variables in local scope are not available in global scope

// // block scope is a local scope
// {
//   let y = 2;
// }

// // function scope is a local scope
// function myFunc() {
//   const z = 5;
// }

// myFunc();

// -------------------

/*
Console puts out
2
4
--myFunc(); is called -> (inside in it) console.log(y); is activated and puts out the global variable let y = 2;
--Because myFunc(); is called, the block (within in it console.log(y);) is activated and puts out the local variables let y = 4;
--The values of the local block scope cannot go upwards to the parent because it is nested inside a local function scope.
--The only way the local function scope can get a value is to use the global scope value
--If the variable yy is not comment out the only way the local block scope can get a value is to use the global scope value yy
--Global Scope is on each level to all available
--Values can be passed down levels but not upwards
*/

// // global scope
// var x = 1;
// let y = 2;
// // let yy = 6;
// // const z = 3;

// // local scope
// function myFunc() {
//   const z = 5;
//   console.log(y);

//   //   local scope
//   {
//     let y = 4;
//     console.log(y);
//     // console.log(yy);
//   }
// }

// myFunc();

// -------------------

// block scope is not just in {} block code it is also in
// if statements
// for loops
// switch and more...

// -------------------

// in depth demonstration

// // starting point
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc() {
//   console.log(`function: ${x}`);
//   console.log(`function: ${y}`);
//   console.log(`function: ${z}`);

//   {
//     console.log(`block: ${x}`);
//     console.log(`block: ${y}`);
//     console.log(`block: ${z}`);
//   }
// }

// myFunc();

// // the block level uses the values of the next parent: the function level
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc() {
//   var x = 10;
//   const z = 5;
//   console.log(`function: ${x}`);
//   console.log(`function: ${y}`);
//   console.log(`function: ${z}`);

//   {
//     console.log(`block: ${x}`);
//     console.log(`block: ${y}`);
//     console.log(`block: ${z}`);
//   }
// }

// myFunc();

// // the the var variables are redefined from 10 to 11
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc() {
//   var x = 10;
//   const z = 5;
//   {
//     var x = 11; // function scoped, not block scoped
//     const z = 6; // block scoped, only allows the value of 6
//     console.log(`block: ${x}`);
//     console.log(`block: ${y}`);
//     console.log(`block: ${z}`);
//   }
//   console.log(`function: ${x}`);
//   console.log(`function: ${y}`);
//   console.log(`function: ${z}`);
// }

// myFunc();
