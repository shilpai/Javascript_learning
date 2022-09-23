
const shilpa = {
  firstName: 'shilpa',
  lastName: 'sonule',
  age: 2037 - 1993,
  place: 'Pune',
  job: 'Web Developer',
  friends: ['Trish', 'Shivu', 'Priyanka']
}

console.log(shilpa);
// in dot notation we have to use the real final property name and not a computate property name
console.log(shilpa.lastName);
console.log(shilpa['lastName']);

const nameKey = 'Name';
console.log(shilpa['first' + nameKey]);
console.log(shilpa['last' + nameKey]);


// const interestedIn = prompt('What do you want to know about shilpa? Choose between firstName, lastName, age, job, and friends');



// if (shilpa[interestedIn]){
//    console.log(shilpa[interestedIn]);
// }else {
//   console.log('Wrong request! choose between firstName, lastName, age, place, job, friends');
// }

// shilpa.Location = 'India';
// shilpa['twitter'] = '@SShilpa05';
// console.log(shilpa);

// Challenge
// "Shilpa has 3 friends, and she's best friend is called Trisha"
console.log(`${shilpa.firstName} has  ${shilpa.friends.length} and she is best friend is called ${shilpa.friends[0]}`);