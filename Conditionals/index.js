/*let a = prompt("Whtas your age?");
a = Number.parseInt(a); // Converting the string to a number
if (a < 0) {
  alert("This is a invalid age");
}
else if (a < 9) {
  alert("You are a kid you cannot even think of driving a car");
}
else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18");
}
else {
  alert("you can now drive as you are above 18");
}
console.log("Done")

console.log("you can", a < 18 ? "not drive" : "drive");
*/

// Taking Decisions: if / else statements
/*const age = 20;
const isOldEnough = age >= 18;
if(isOldEnough){
  console.log('Shilpa can start driving license 🚗')
}*/

const age = 15;

if(age >= 18){
  console.log('Shilpa can start driving license 🚗')
}else{
  const yearsLeft = 18 - age;
  console.log(`Your to young, wait another ${yearsLeft} years 😁`)
}

const birthYear = 2012;
let century;
if(birthYear <= 2000){
  century = 20;
}else{
  century = 21;
}
console.log(century);

// Practice question?
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.92;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
// if(BMIMark > BMIJohn){
//   console.log("Marks BMI heigher than Johns")
// }else{
//   console.log("Johns BMI heigher than Marks")
// }

// Use the template literals to include the BMI values in the outputs examples : "Marks BMI (28.31) is heigher than Johns BMI (23.9)"
if(BMIMark > BMIJohn){
  console.log(`Marks BMI (${BMIMark}) heigher than Johns (${BMIJohn})`)
}else{
  console.log(`Johns BMI (${BMIJohn}) heigher than Marks (${BMIMark}) `)
}