function logger() {
  console.log('My name is shilpa');
}

// calling / running / invoking function
logger();
logger();
logger();

// function can not only reuse a piece of code but it also recieve data and returns data back also

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = (`Juice with ${apples} apples and ${oranges} oranges.`);
  return juice;
}
// we called fruitProcessor function here with 2 arguments witn 5,1 and this arguments are the specific so the actual value of the function parameters are apples and oranges
const fruitJuice = fruitProcessor(5, 1);
console.log(fruitJuice);
// console.log(fruitProcessor(5,1));

// we can reuse the function with different input values
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('25');

