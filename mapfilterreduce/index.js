// Map_filter_reduce
// Array map methood
let arr = [44, 58, 31]
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index
})
console.log(a);
// console.log(arr);

// Array filter methood
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a < 10
})
console.log(a2)

// Above both method = original array is not change

// Array reduce methood
/*let arr3 = [1, 2, 3, 5, 2, 1];
let newarr3 = arr3.reduce((h1, h2)=>{
  return h1 + h2
})
console.log(newarr3);*/
Or
let arr3 = [1, 2, 3, 5, 2, 1];
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func);
console.log(newarr3);
