// singleton
// Object.create => constructer method

// object literals

const mySym = Symbol("key1")


const JsUser = { // obect ke andar koi bhi type ki value de skte hai
    name: "Suraj",
    "full name": "Suraj Kashyap", //ab isko dot wale method se excess nhi kr payenge
    [mySym]: "mykey1",  //if we want to make a symbol as a key then use [].
    age: 18,
    location: "prayagraj",
    email: "suraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //mykey1

JsUser.email = "suraj@chatgpt.com" //update
// Object.freeze(JsUser) //now we can't change
JsUser.email = "suraj@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
