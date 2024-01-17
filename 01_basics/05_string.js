// *******************************
//primitive type ke liye (stack memory) use hoti hai
//stack memory me jo bhi define hota hai uski ek copy milti hai
//non-primitive type ke liye (heap memory) use hoti hai
// heap memory me refernce type jaata hai

//stack memory
let myName = "suraj";
let anotherName = myName;
anothername = "sagar";
console.log(myName); //suraj
console.log(anotherName); //sagar

 //heap memory
let userOne = {
    email : "userOne@gmail.com",
    upi : "@ybl"
}
let userTwo = userOne;  //userTwo ko userOne me referance kr denge
userTwo.email = "userTwo@gmail.com"; //ab userOne and userTwo me change ho jayega
console.log(userOne.email); //userTwo@gmail.com
console.log(userTwo.email); //userTwo@gmail.com


//************ String **********************

const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");  //hitesh50 Value

//string interpolation (``)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com'); 

// console.log(gameName[0]); //h
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4);  //hite ie 0 to 3 index tk new string banegi
console.log(newString);

const anotherString = gameName.slice(-8, 4) 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim starting and end white spaces remove kr deta hai

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));//false string ke andar sundar hai ya nhi

console.log(gameName.split('-')); // split the string on the basis of -