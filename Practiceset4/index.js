// What will the following print in Javascript ?
// console.log("har\""length)
let name = "shil\" ";
console.log(name.length)

// Explore the includes, startWith & endsWith function of a string
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox ';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the  sentence`);

// Write a program to convert a given string to lowerCase
const person = "Lovely";
console.log(person.toLowerCase())

// Extract the amount out of this string "Please give Rs 1000"
let str1 = "Please give Rs 1000";
let amount = Number.parseInt(str1.slice(15));
console.log(amount);
console.log(typeof amount);


// Try to change 4th character of a given string were you able to do it?
const friend = "Priyanka";
friend[4] = "K"
console.log(friend);  // friend is not change , beacause string is immutable