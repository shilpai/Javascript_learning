// Function declaration 
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}

const age1 = calcAge1(1993);
console.log(age1);

// Function expression
// expression produce values
const calcAge2 = function(birthYeah) {
  return 2037 - birthYeah;
}

const age2 = calcAge2(1993);
console.log(age1, age2);