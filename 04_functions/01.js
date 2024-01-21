
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ //parameter

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // "sam" is default username
    if(!username){ //
        console.log("PLease enter a username");
        return ;
    }
    return `${username} just logged in` ;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())  // if we did not pass anything then ans is undefined









function calculateCartPrice(val1, val2, ...num1){ 
    return num1; //num1 will return [500,2000] 
}

// console.log(calculateCartPrice(200, 400, 500, 2000))




const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)


handleObject({ // we can directly pass object.
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //// we can directly pass array.