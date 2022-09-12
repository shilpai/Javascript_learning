const age = '25';
if (age === 25) console.log('You just became a adult 😊 (strict)');
if (age == 25) console.log('You just became a adult 😊 (loose)');

const favourite = Number(prompt("What's your favourite number."));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {   // '23' == 23
  console.log('Cool 23 is an amazing number')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?')




// 18 === 18
// true

// 18 == 18
// true

// '18' == 18
// true

// '18' === 18
// false