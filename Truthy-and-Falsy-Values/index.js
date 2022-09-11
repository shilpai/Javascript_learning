// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('shilpa'));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all 😊");
}
else {
  console.log("You should get a job ✌️");
}

let height;
if (height) {
  console.log('YAY height is defined');
}
else {
  console.log('Height is UNDEFINED');
}