// Immediately Invoked Function Expressions (IIFE) => global scope ke pollution se problem hoti hai kai baar to us global scope ke pollution or variable ko hatane ke liye use krte hai


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // imp. to use semicolon
 

// in terms of arrow function
( (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')