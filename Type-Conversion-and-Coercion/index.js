// type conversion
const inputYear = '1993';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 28);
console.log(Number(inputYear) + 28);

console.log(Number('Shilpa'));
console.log(typeof NaN);

console.log(String(28));


// whenever in output value is in white then it is string

// type coercion
console.log('I am ' + 23 + ' years old ');
// note - In Js the + operator that we use here triggers a coercion to string and whenever their is operation between a string and the  number then the number will be converted into a string 

// note - + operator not convert numbers to string

console.log('22' - '10' - 3);
console.log('22' + '10' + 3);  // string convert into number
console.log('22' * '2');
console.log('22' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

let a = 2 + 3 + 4 + '5';
console.log(a);

let a1 = '10' - '4' - '3' - 2 + '5';
console.log(a1);
