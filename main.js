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

// Original Code:
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// Output:  super cool

// Hoisted Code:
// Original Code:
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// print();
// console.log(brendan);
// Output:  only okay
//          only okay

// ES6 Code:
let brendan = 'super cool';
function print(){
    let brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);
// Output:  only okay
//          super cool

console.log("\n****************************************");
console.log("Number 4\n");

// Original Code
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// Output:  chicken
//          half-chicken

// Hoisted Code
var food = 'chicken';
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
console.log(food);
eat();
// Output:  chicken
//          half-chicken

// ES6 Code
// let food = 'chicken';
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     let food = 'gone';
// }
// console.log(food);
// eat();
// Output: Syntax Error: Cannot access 'food' before initialization

console.log("\n****************************************");
console.log("Number 5\n");

// Original Code: mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// Ouput Prediction:    undefined
//                      chicken
//                      fish
//                      fish
// Actual Output:       chicken
//                      chicken

// Hoisted Code:
// var food;
// var mean;
// console.log(food);
// mean = function() {
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
// Output:              chicken
//                      chicken

// ES6 Code
let mean;
mean = function() {
    let food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
console.log(food);
// Ouput prediction:    Syntax error
// Actual Output:       chicken
//                      chicken