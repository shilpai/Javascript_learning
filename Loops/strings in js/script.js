// for loop
//print 1 to 100
// for (let count = 1; count <= 100; count++) {
//     console.log("Namaskar Bharat");
// };

// console.log("Loop has ended....");

// Calculate sum of 1 to 100
// let sum = 0;
// let n = 100;
// for(i = 1; i <= 100; i++) {
//     sum = sum + i; // sum = 0 + 1
// };
// console.log(sum);

//while loop
// let i = 1;
// while(i <= 5){
//     console.log("Apna Desh Bharat");
//     i++;
// }

// do-while loop
// let i = 20;
// do{
//     console.log("Namaste Bharat");
//     i++;
// } while(i <= 10);

// for-of loop
// let str = "ShilpaSnule";
// for(let i of str) {
//     console.log("i =", i);
// }

// example
// let str = "Javascript";
// let size = 0;

// for (let i of str) {
//     console.log("i =" ,i);
//     size++;
// };
// console.log("size of string is" ,size);

// for-in loop

// let students = {
//     name: "shilpa",
//     age: 28,
//     cgpa: 8.5,
//     isPass: true,
// };

// for(let key in students) {
//     console.log("key= ", key, "  value=" , students[key] );
// }

// Practice Questions
// 1) Print all even numberes  from 0 to 100

// for(let num=0; num<=100; num++){
//     if(num%2 == 0){      // even condition
//         console.log(num);
//     }
// };

// for(let num=0; num<=100; num++){
//     if(num%2 !== 0){      // odd condition
//         console.log(num);
//     }
// }

// 2) Create a game where you start with any random game nuumber. 
//    Ask the user to keep  guessing the game number untile the user enters correct value.

// let gameNum = 25;
// let userNum = prompt("Guess the game number:");

// while(gameNum != userNum){
//     userNum = prompt("You entered wrong number, guess again...")
// }

// console.log("Congratulations , you entered the correct number", gameNum);

//Template Literal
let obj = {
    item: "Pen",
    price: 10,
};

let output = (`The cost of ${obj.item} is ${obj.price} Rupees`);
console.log(output);

// practice questions
// 1)Prompt the user to enter their full name. Generate a username for them based on thr input.
//   Start the username with @, followed by their fullname and ending with the fullname length.