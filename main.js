/////////////////////////////////////////////////////
//  MAIN APPLICATION
/////////////////////////////////////////////////////

console.log("****************************************");
console.log("Number 1\n");

// Original Code:
// console.log(hello);
// var hello = 'world';
// Ouput:   undefined

// Hoisted Code:
var hello;
console.log(hello);
hello = 'world';
// Output:  undefined

// ES6 Code:
// console.log(hello);
// let hello = 'worrld';
// Output:  Syntax error: cannot access hello before initialization

console.log("****************************************");
console.log("Number 2\n");

// Original Code:
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// Output:  Magnet

// Hoisted Code:
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// test();
// Output:  Magnet

// ES6 Code:
let needle = 'haystack';
function test(){
    let needle = 'magnet';
    console.log(needle);
}
test();
// Output:  Magnet

console.log("\n****************************************");
console.log("Number 3\n");