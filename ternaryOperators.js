//ternary operators
/*
let age = 1;

if(age>=5){
    drink="coffee";//set variable value accoring to condition
}else{
    drink="milk";//set variable value accoring to condition
}
console.log(drink);
*/

//we can write above code in short using ternary operator
let age = 8;
let drink = age>=5 ? "coffee" : "milk";
//syntax
// let variableToStoreAndPrint = conditionToBeChecked ? ResultIfCondIsTrue : ResultIfCondIsFalse ;
console.log(drink);
