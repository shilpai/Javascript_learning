const calcAge = function(birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function(birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1993, 'shilpa'));
console.log(yearsUntilRetirement(1998, 'Trisha'));