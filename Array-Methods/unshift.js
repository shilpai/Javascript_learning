const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); //Lemon,Banana,Orange,Apple,Mango


var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.unshift("C++");
console.log(languages); // [ 'C++', 'JavaScript', 'Python', 'Java', 'Lua' ]
console.log(count); // 5

var priceList = [12, 21, 35];

var count1 = priceList.unshift(44, 10, 1.6);
console.log(priceList); // [ 44, 10, 1.6, 12, 21, 35 ]
console.log(count1); // 6