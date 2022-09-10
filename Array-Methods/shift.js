const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();    //Orange,Apple,Mango


var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];

var shifted = languages.shift();

console.log(languages); // [ 'Python', 'Java', 'C++', 'Lua' ]
console.log(shifted); // JavaScript

// shift returns any type of object
var numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(numbers.shift()); // [ 1, 2, 3 ]
console.log(numbers); // [ [ 4, 5, 6 ], [ -5, -4, -3 ] ]