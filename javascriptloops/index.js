// Program to add first n natural numbers
// For loop
/*let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++){
  sum += (i + 1)
  console.log((i + 1), "+")
} 
console.log(" Sum of first " + n + " natural numbers is " + sum) */

/*
for (i = 0; i < 5; i++){
  // text += " The number is " + i + "<br>";
  console.log(i)
}
*/

/*const cars = ["BMW", "Volvo", "ferrari", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = " "; i < len; i++){
  console.log(i)
}*/

// For in loop
//JavaScript for in statement loops through the properties of an Object:
/*let person = {
  shilpa: 90,
  guddu: 45,
  pooja: 56,
  kittu: 57,
  shiv: 23,
}
for (let a in person){
  console.log("Marks of " + a + " are " + person[a])
}
*/

/*
const person = {
  fname: "shilpa",
  lname: "sonule",
  age: 28,
};
for (let x in person){
  console.log("Information of " + x + " is " + person[x])
}
*/
//  JavaScript for in statement can also loop over the properties of an Array:
/*const numbers = [45, 50, 7, 8, 5];
for (let x in numbers){
  console.log (numbers[x])
}
*/

// For of loop
for (let b of "Shilpa") {
  console.log(b)
}

// while loop
/*let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
while(i<n){
  console.log(i)
  i++;
}*/

// do-while loop
let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
do{
  console.log(i)
  i++;
}while(i<n)