// Practice set 5 on array:
// 1: Create an array of numbers and take input from the user to add numbers to this array
// let num = [1, 2, 3, 4, 5, 6, 7, 83];
// let a = prompt("Enter a number");
// a = Number.parseInt(a)
// num.push(a)
// console.log(num);

// 2: Keep adding numbers to the array in 1 untile 0 is added to the array
let num = [1, 2, 3, 4, 5, 6, 7, 83];
let a;
do {
  a = prompt("Enter a number");
  a = Number.parseInt(a)
  num.push(a)
} while (a != 0);
console.log(num);




// 3: Filter for numbers divisible by 10 from a given array
let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n = arr.filter((x) => {
  return x % 10 == 0
})
console.log(n)

// 4: Create an array of square of given numberes 
let arr2 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let s = arr2.map((x) => {
  return x * x
})
console.log(s)

// 5: Use reduce to calculate factorial of a given numberes from an array of first n natural numberes (n being the numberes whose factorial needs to be calculated)
let arr3 = [1, 2, 3, 4]
let a2 = arr.reduce((x1, x2) => {
  return x1 * x2
})
console.log(a2);