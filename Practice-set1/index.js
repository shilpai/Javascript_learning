// create a variable of type string and try to add a number to it.
let a = "shilpa";
let b = 8
console.log(a + b)

// use typeOf operator to find the datatype of the string in last question
console.log(typeof (a + b))

// create a const object in javascript can you change it to hold a number later?
const a1 = {
  name: "shilpa",
  section: 1,
  isPrinciple: false

} // note - in a1 we do not store number, string , even we do not store any other object

// try to add a new key to the const object in problem 3 were you able to do it?
a1['friend'] = "shivani"
a1['name'] = "pooja"

console.log(a1)

// write a js program to create a word-meaning dictionary of 5 words.
const dict = {
  Adulting: "The action of becoming or acting like an adult",
  Contactless: "not having to physically touch or interact with people",
  Quarenteen: "a teenager during the COVID-19 pandemic ",
  Thirsty: "Having a need for attention or approval ",
  WFH: " An abbreviation for work (or working) from home"
}

console.log(dict.WFH)
console.log(dict['WFH'])


