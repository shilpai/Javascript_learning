// array loops
let num = [8, 7, 5, 9, 3];
// for(i=0; i<num.length; i++){
//   console.log(num[i])
// }

// ForEeach Loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from
let name = "Shilpa";
let arr = Array.from(name);
console.log(arr);

// for...of
for (let i of num) {
  console.log(i)
}

// for...in
for (let item in num) {
  console.log(item)
}