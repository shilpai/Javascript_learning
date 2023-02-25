// Basic array operations or methods

const friend = ['jigiksha', 'shivani', 'priyanka', 'pooja'];

// Add elements
// friend.push('Jay');
const newLength = friend.push('Jay'); // add element at last in array
console.log(newLength)
console.log(friend);

friend.unshift('rahul');   // add element in array at first
console.log(friend);

// Remove element
friend.pop();   // remove last element in array
console.log(friend);

friend.shift();   // remove first element in array
console.log(friend);

console.log(friend.indexOf('shivani'));
console.log(friend.indexOf('shiv'));

// modern ES6 method
friend.push(24);
console.log(friend.includes('shivani'));
console.log(friend.includes('shiv'));
console.log(friend.includes('24'));

// very useful
 if (friend.includes('shivani')) {
    console.log(' I have a friend called shivani ')
}