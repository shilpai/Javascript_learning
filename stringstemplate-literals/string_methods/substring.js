const message = "JavaScript is fun.";

// get the substring starting from index 0 to 10
let result = message.substring(0, 10);
console.log(result);

// Output: JavaScript


let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13); //Banana



let string = "BoardInfinity JavaScript Tutorials";

// first character
substr1 = string.substring(0, 1);
console.log(substr1); // B

// if start > end, they are swapped
substr2 = string.substring(1, 0);
console.log(substr2); // B

// From 11th to last character
substr3 = string.substring(10);
console.log(substr3); // ity JavaScript Tutorials

// the extreme values are 0 and str.length

// same as string.substring(0)
substr4 = string.substring(-44, 90);
console.log(substr4); // BoardInfinity JavaScript Tutorials

// indexEnd is exclusive
substr5 = string.substring(0, string.length - 1);
console.log(substr5); // BoardInfinity JavaScript Tutorial