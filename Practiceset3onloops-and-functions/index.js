// Practice set 3
// Write a program to print the marks of a student in an object using for loop
/*let marks = {
 shilpa: 98,
 kittu: 70,
 guddu: 7,
 pooja: 58,
  
}
for(let i=0;i<Object.keys(marks).length;i++){
 console.log(" The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}*/

// Write a program in above  using for in loop
let marks = {
  shilpa: 98,
  kittu: 70,
  guddu: 7,
  pooja: 58,

}
for (let key in marks) {
  console.log(" The marks of " + key + " are " + marks[key])
}

// Write a programe to print "try again" untile the user entres the current number
let correctNum = 28
let i
while (i != correctNum) {
  i = prompt("Enter a number")
  console.log("try again")
}
console.log("You have entered a correct number")

// Write a function to find mean of 5 number
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7))