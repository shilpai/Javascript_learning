// Basic Array Operations (Methods)
const friends = ['Shivani', 'Priyanka', 'Jigiksha'];

// Add elements
const newLength = friends.push('Trisha');
console.log(friends);
console.log(newLength);

friends.unshift('Rahul');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
