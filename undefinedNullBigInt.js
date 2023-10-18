//undefined -   means type of variable is declared but has no value assigned
/*
let firstName;
console.log(typeof firstname);
firstName = "Piyush";
console.log(typeof firstName);
*/


//null  -  null means no value
/*
let myVar = null;
console.log(myVar);
console.log(typeof myVar);  //it shows as object data type due to bugs in javascript...but its actually null
*/ 

//BigInt - if we want to store number greater than max limit of number we use BigInt....we can also use it to store small numbers

/*
let number = 111;

//let myNumber = BigInt(number);  //this converts number into BigInt

let myNumber = 12n;//this also converts number to BigInt

console.log(Number.MAX_SAFE_INTEGER);//this shows safe limit to store number which is 9007199254740991

//we can't perform maths operations number and BigInt we can only add BigInt
*/