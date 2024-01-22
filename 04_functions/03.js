const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "sam" // change
// user.welcomeMessage()

// console.log(this); // => {} empty object is the answer

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefine will come => means we can use "this" only in object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //undefine will come 
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); //undefine will come 
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // in curley bracket we use return

// const addTwo = (num1, num2) =>  num1 + num2   // 7

// const addTwo = (num1, num2) => ( num1 + num2 ) //7 // in paranthesis we will not return keyword

const addTwo = (num1, num2) => ({username: "hitesh"}) // object return


console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()