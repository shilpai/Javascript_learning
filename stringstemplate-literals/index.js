

// strings and templates literals
// Strings
// let name = 'shilpa';
// console.log(name.length);
/*console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);*/

// let friend = "Rahul"
// console.log(friend);

// Variables Substitutions
/*const firstName = 'shilpa';
const job = 'developer';
const birthYear = 1993;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);*/

// Template literals
// we need 'backticks' to write template literals
// Template Literals use back-ticks (``) rather than the quotes ("") to define a string
/*const shilpaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(shilpaNew);

console.log(`Just a regular string`);

console.log('string with \n\
multiple \n\
lines!');

console.log(`string 
multiple
lines`)*/

// With template literals, you can use both single and double quotes inside a string:
console.log(` 'I'm' "going everywhere"`);

// for instances 
let girl1 = "pooja";
let girl2 = "guddu";
// pooja is a sister of guddu
let sentence = `${girl1} is a sister of ${girl2}`
console.log(sentence);

// Escape Sequence Chraracters
let fruit = 'Bana\'na';
console.log(fruit);

let man = "Adam d \"Anglo";
console.log(man.length);

// String Method
let plant = "Banyan"
console.log(plant.toUpperCase());
console.log(plant.toLowerCase());
console.log(plant.slice(2, 5));
console.log(plant.slice(2));
console.log(plant.replace("Ban", "Ran"));

let name = "sonu";
let friend = "Sumya";
let friend2 = "      Jigiksha     ";
console.log(name.concat(" is a friend of ", friend, " ok "))

console.log(friend2)
console.log(friend2.trim())

//
let fr = " Ram " + " Sita " + " laxman "
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr)




