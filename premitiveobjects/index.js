// nn bb ss u - premitive in js
let a = null;
let b = 189;
let c = true; //can also be false
let d = BigInt("180");
let e = "shilpa";
let f = Symbol("I am a nice symbol");
let g = undefined

console.log(a, b, c, d, e, f, g)
console.log(typeof e)

//Objects in JS - non-premitive data types
const item = {
  "shilpa": true,
  "shubh": false,
  "rahul": 89,
  "kittu": undefined

}
console.log(item["shilpa"])
console.log(item.rahul)     // access object properties in two ways

// const person = {
//   firstName:"John",
//   lastName:"Doe",
//   age:50,
//   eyeColor:"blue"
// };
// console.log(person)

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person);
//In the example above, this refers to the person object.
//I.E. this.firstName means the firstName property of this.
//I.E. this.firstName means the firstName property of person.

