//******* Numbers *********************

const score = 400
// console.log(score);  //400

const balance = new Number(100);  //if we want to mention explicitily 100 is a number 
// console.log(balance); //[Number: 100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); // means after point it will go upto 2 digit ie 100.00

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4)); //123.9 presize value degi
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000



// +++++++++++++ Maths +++++++++++++++++++++++++++++
//Math library javascript me bydefault hoti hai

// console.log(Math);
// console.log(Math.abs(-4)); // it will print absolute value of -4 ie 4.
// console.log(Math.round(4.6)); // round off => ans = 5
// console.log(Math.ceil(4.2));  // greater value ie 5
// console.log(Math.floor(4.9));  lower value ie 4
// console.log(Math.min(4, 3, 6, 8));  //3
// console.log(Math.max(4, 3, 6, 8));  //8


console.log(Math.random()); // it will print random number  between 0 to 1.
console.log((Math.random()*10) + 1);  // 1 to 9  7.9898980
console.log(Math.floor(Math.random()*10) + 1);  //  7  above integar print ho jayega

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 and 20 ke beech wala integer print hoga
