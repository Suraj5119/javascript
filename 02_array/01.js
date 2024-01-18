// array =>combination of element of any datatype
// javascript array are resizable . that means we can add and remove element
const myArr =  [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]); //0

// Array methods

// myArr.push(6); // add 6 at the last
// myArr.push(7);
// myArr.pop(); // remove last element of array

// myArr.unshift(9); // add 9 at the starting
// myArr.shift();  // remove first element

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); //3 if element not exist in array then ans is -1.

// const newArr = myArr.join(); // convert all the element with comma as a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);  //[0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)

console.log(myn1); //[1,2]
console.log("B ", myArr); //[0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); //[0,4,5] original array me se 1,2,3 remove ho jayega
console.log(myn2); //[1,2,3] 
