// Arrays
let marks_of_12th_class = [98, 85, 62, "not peresent", false];
/*
console.log(marks_of_12th_class[0]);
console.log(marks_of_12th_class[1]);
console.log(marks_of_12th_class[2]);
console.log(marks_of_12th_class[3]);
console.log(marks_of_12th_class[4]);
console.log(marks_of_12th_class[5]); // will be unrefined beacause index 5 is not exist
marks_of_12th_class[5] = 99; // Adding a new value to the array
marks_of_12th_class[0] = 100; // Changing the value of an array
console.log(marks_of_12th_class);

console.log("The length of marks_of_12th_class is " + marks_of_12th_class.length); */

// Array Methods
let num = [1, 2, 3, 4, 56, 90];
let b = num.toString();
// console.log(typeof b);
// console.log(b);
let c = num.join(" _ ")
console.log(c);
let e = num.join(" and ")
console.log(typeof e);

// num.pop();
// console.log(num);
// let r = num.pop();    // pop returns the popped element 
// console.log(num, r);

// let r = num.push(4);    // push returns the new array length 
// console.log(num, r);

// let r = num.shift();    // Removes an element from the starting of the array and  modified new aarray
// console.log(num, r);

// let s = num.unshift(16);    
// console.log(num, s);       // what is 6? = return new length of array

// Some More JavaScript Array Methods:
/*let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number_more =  [11, 12, 13, 14, 15, 16, 17, 18, 19];
let number_even_more =  [211, 212, 213, 214, 215, 216, 217, 218, 219];
delete number[0]       // this function is not affect on 'length'
console.log(number);
// console.log(number.length);

let newArray = number.concat(number_more, number_even_more); // concat method merge all arrays with each other
console.log(newArray); */

// sort method 
// let compare = (a, b)=>{
//    // sorting in ascending's order
//   return a - b   
//    // sorting in descending's order
//   return b - a  

// }
// let array = [111, 481, 33, 41, 555, 62, 78, 86];
// array.sort(compare );
// // array.sort();
// array.reverse();
// console.log(array);

// splice and slice
// splice
let newNum = [1, 2, 3, 4, 56, 90];
// newNum.splice(2, 3 , 1024, 1034, 1044);
// let deletedValues = newNum.splice(2, 3 , 1024, 1034, 1044);
// console.log(deletedValues);
// console.log( newNum);
// slice
let newNumber = newNum.slice(3, 4);
console.log(newNumber);



