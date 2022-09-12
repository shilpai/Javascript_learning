// Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision){
//   console.log('Shilpa is able to drive')
// }else{
//   console.log('Someone else should drive...')
// }

const isTired = false;  // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Shilpa is able to drive')
} else {
  console.log('Someone else should drive...')
}
