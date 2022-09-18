// Arrays
const friends = ['Shivani', 'Priyanka', 'Jigiksha'];
console.log(friends);

const years = new Array (1993, 1998, 1995, 1997, 2002);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(years.length);

friends[2] = 'Trisha';
console.log(friends);

const firstName = 'Shilpa';
const shilpa = [firstName, 'Sonule', 2025 - 1993, 'Web Developer', friends];
console.log(shilpa);
console.log(shilpa.length);

// Exercise
const calcAge = function (birthYeah){
  return 2025 - birthYeah;
}
const annual = [1993, 2002, 1998, 1995, 1997];

const age1 = calcAge(annual[0]);
const age2 = calcAge(annual[1]);
const age3 = calcAge(annual[annual.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(annual[0]), calcAge(annual[1]), calcAge(annual[annual.length - 1])];
console.log(ages);

