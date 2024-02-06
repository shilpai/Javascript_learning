
const arr = [5, 1, 3, 2, 6];
/*
// * map example
// Double


const arr = [5, 1, 3, 2, 6];

function double(x){
 return x * 2;
}

const output = arr.map(double);

console.log(output);   //[10, 2, 6, 4, 12]


// Triple
function triple(x){
    return x * 3;
}

const output = arr.map(triple);
console.log(output);   //[15, 3, 9, 6, 18]


// Binary
// function binary(x){
//     return x.toString(2);
// }
//* normal function
// const output = arr.map(function binary(x){
//     return x.toString(2);
// });

//* arrow function
const output = arr.map((x)=>x.toString(2));
console.log(output);    

// ['101', '1', '11', '10', '110']
**/

/*
//* Filter
// filter odd values
function isOdd(x){
 return x % 2;
}

// filter even value
function isEven(x){
    return x % 2 === 0;
}

// greaterThanFour
function greaterThanFour(x){
    return x > 4;
}
const output = arr.filter(greaterThanFour);
console.log(output);    // [5, 6]
**/

// //* Reduce
// function findSum(arr){
//     let sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

const fruits = new Map([
    ["apples", 100],
    ["oranges", 200],
    ["banana", 300]
])

console.log(fruits.delete("apples"));