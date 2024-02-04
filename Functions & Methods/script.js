// 1) Create a function  using the "function" keyword that takes a String as an arugement  & return the Number
// of vowels in the string.

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// const result = countVowels("shilpasonule");
// console.log(result);

// Arrow function
// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// Que. For a given array of numberes , print the square of  each value using  the forEach loop.
// let number = [1,2,3,4,5];

// number.forEach((val)=> {
//   console.log(val * val);
// })


// let calcSquare = (num) => {
//   console.log(num * num);
// };

// number.forEach(calcSquare);

//Map method
// let nums = [52,63,70];

// const newArray = nums.map((val) => {
//   return val * 2;
// });

// console.log(newArray);

//Filter Method
let arr = [2,3,8,7,3,4];

const evenArray = arr.filter((val)=> {
  return val%2 === 0;
});

console.log(evenArray);