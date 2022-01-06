/////////////////////////////////////////////////////
//  MAIN APPLICATION
/////////////////////////////////////////////////////

console.log("****************************************");
console.log("Number 1\n");

// Original Code:
// console.log(hello);
// var hello = 'world';
// Ouput:   undefined

Hoisted Code:
var hello;
console.log(hello);
hello = 'world';
// Output:  undefined

// ES6 Code:
// console.log(hello);
// let hello = 'worrld';
// Output:  Syntax error: cannot access hello before initialization

