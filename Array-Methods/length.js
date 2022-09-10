const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";  //Banana,Orange,Apple,Mango,Kiwi


var companyList = ["Apple", "Google", "Facebook", "Amazon"];
console.log(companyList.length); // Output: 4

var randomList = ["JavaScript", 44];
console.log(randomList.length); // Output: 2

var emptyArray = [];
console.log(emptyArray.length); // Output: 0


var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// languages.length can be used to find out 
// the number of times to loop over an array
for (i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

//JavaScript
//Python
//C++
//Java
//Lua