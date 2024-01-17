//data types are divided into two part(on the basis of kis tarah se data ko memory me rakha jata hai and use kis tarah se excess kre)
//  => 1)primitive and 2)non-primitive(reference type)

//  Primitive

//  7 types : String, Symbol, Number,null,  Boolearn, BigInt,  undefined

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //iska type object hota hai
let userEmail;  //undefine

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //array
let myObj = { //object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //datatypes function aayega
    console.log("Hello world");
}

console.log(typeof anotherId);  //it is use to find datatype

// https://262.ecma-international.org/5.1/#sec-11.4.3
